import { ProductRepository } from "@/repository/Product.repository";
import {
	CreateProductDto,
	ResponseProductDto,
} from "@/types/product/product.dto";

export class ProductService {
	private productRepository: ProductRepository;

	constructor() {
		this.productRepository = new ProductRepository();
	}

	findAll = async () => {
		return await this.productRepository.findAll();
	};

	findById = async (id: number) => {
		return await this.productRepository.findById(id);
	};

	create = async (data: CreateProductDto): Promise<ResponseProductDto> => {
		return await this.productRepository.create(data);
	};
}
