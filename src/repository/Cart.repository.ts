import { Cart } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { CreateCartDto } from "@/types/cart/cart.dto";

export class CartRespository {
	async findById(id: number): Promise<Cart | null> {
		return await prisma.cart.findUnique({
			where: { id },
		});
	}

	async create(data: CreateCartDto): Promise<Cart> {
		return await prisma.cart.create({ data });
	}

	async delete(id: number): Promise<Cart | null> {
		return await prisma.cart.delete({
			where: { id },
		});
	}
}
