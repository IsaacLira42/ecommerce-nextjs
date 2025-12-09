import prisma from "@/lib/prisma";
import { CreateCartDto, UpdateCartDto } from "@/types/cart/cart.dto";
import { Cart, CartItem, Product } from "@prisma/client";

type CartWithItems = Cart & {
	cartItems: (CartItem & { product: Product })[];
};

export class CartRepository {
	async findById(id: number): Promise<CartWithItems | null> {
		return await prisma.cart.findUnique({
			where: { id },
			include: {
				cartItems: {
					include: {
						product: true,
					},
				},
			},
		});
	}

	async create(data: CreateCartDto): Promise<CartWithItems> {
		const { items, subtotal, total } = data;

		return await prisma.cart.create({
			data: {
				subtotal,
				total,
				cartItems: {
					create: items.map((item) => ({
						productId: item.productId,
						quantity: item.quantity,
					})),
				},
			},
			include: {
				cartItems: {
					include: {
						product: true,
					},
				},
			},
		});
	}

	async update(id: number, data: UpdateCartDto): Promise<CartWithItems | null> {
		const { items, subtotal, total } = data;

		return await prisma.cart.update({
			where: { id },
			data: {
				subtotal,
				total,
				cartItems: {
					deleteMany: {},
					create: items.map((item) => ({
						productId: item.productId,
						quantity: item.quantity,
					})),
				},
			},
			include: {
				cartItems: {
					include: {
						product: true,
					},
				},
			},
		});
	}

	async delete(id: number): Promise<CartWithItems | null> {
		return await prisma.cart.delete({
			where: { id },
			include: {
				cartItems: {
					include: {
						product: true,
					},
				},
			},
		});
	}
}
