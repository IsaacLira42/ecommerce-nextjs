import { CartRepository } from "@/repository/Cart.repository";
import { CreateCartDto, ResponseCartDto, UpdateCartDto } from "@/types/cart/cart.dto";
import { Cart, CartItem, Product } from "@prisma/client";

type CartWithItems = Cart & {
	cartItems: (CartItem & { product: Product })[];
};

export class CartService {
	private cartRespository: CartRepository;

	constructor() {
		this.cartRespository = new CartRepository();
	}

	findById = async (id: number): Promise<ResponseCartDto | null> => {
		const cart = (await this.cartRespository.findById(id)) as CartWithItems | null;
		if (!cart) {
			return null;
		}
		return this.toResponse(cart);
	};

	create = async (data: CreateCartDto): Promise<ResponseCartDto> => {
		const cart = await this.cartRespository.create(data);
		return this.toResponse(cart);
	};

	update = async (id: number, data: UpdateCartDto): Promise<ResponseCartDto | null> => {
		const cart = await this.cartRespository.update(id, data);
		if (!cart) {
			return null;
		}
		return this.toResponse(cart);
	};

	delete = async (id: number): Promise<ResponseCartDto | null> => {
		const cart = await this.cartRespository.delete(id);
		if (!cart) {
			return null;
		}
		return this.toResponse(cart);
	};

	private toResponse = (cart: CartWithItems): ResponseCartDto => {
		return {
			id: cart.id,
			subtotal: cart.subtotal,
			total: cart.total,
			items: cart.cartItems.map((item) => ({
				productId: item.productId,
				quantity: item.quantity,
				product: {
					id: item.product.id,
					name: item.product.name,
					price: item.product.price,
					imageUrl: item.product.imageUrl,
				},
			})),
		};
	};
}
