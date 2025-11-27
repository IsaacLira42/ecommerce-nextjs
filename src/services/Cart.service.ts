import { CartRespository } from "@/repository/Cart.repository";
import { CreateCartDto, ResponseCartDto } from "@/types/cart/cart.dto";

export class CartService {
	private cartRespository: CartRespository;

	constructor() {
		this.cartRespository = new CartRespository();
	}

	findById = async (id: number) => {
		return await this.cartRespository.findById(id);
	};

	create = async (data: CreateCartDto): Promise<ResponseCartDto> => {
		return await this.cartRespository.create(data);
	};

	delete = async (id: number): Promise<ResponseCartDto | null> => {
		return await this.cartRespository.delete(id);
	};
}
