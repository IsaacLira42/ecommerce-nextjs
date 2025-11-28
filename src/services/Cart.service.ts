import { CartRepository } from "@/repository/Cart.repository";
import { CreateCartDto, ResponseCartDto } from "@/types/cart/cart.dto";
import { Cart } from "@prisma/client";

export class CartService {
	private cartRespository: CartRepository;

	constructor() {
		this.cartRespository = new CartRepository();
	}

	findById = async (id: number): Promise<ResponseCartDto | null> => {
		const cart = await this.cartRespository.findById(id);
		if (!cart) {
			return null;
		}
		return this.toResponse(cart);
	};

	create = async (data: CreateCartDto): Promise<ResponseCartDto> => {
		const cart = await this.cartRespository.create(data);
		return this.toResponse(cart);
	};

	delete = async (id: number): Promise<ResponseCartDto | null> => {
		const cart = await this.cartRespository.delete(id);
		if (!cart) {
			return null;
		}
		return this.toResponse(cart);
	};

	private toResponse = (cart: Cart): ResponseCartDto => {
		return {
			id: cart.id,
			subtotal: cart.subtotal,
			total: cart.total,
		};
	};
}
