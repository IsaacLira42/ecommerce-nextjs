import { ProductRepository } from "@/repository/Product.repository";
import {
	CreateProductDto,
	ResponseProductDto,
} from "@/types/product/product.dto";
import { Product } from "@prisma/client";

export class ProductService {
	private productRepository: ProductRepository;

	constructor() {
		this.productRepository = new ProductRepository();
	}

	findAll = async (): Promise<ResponseProductDto[]> => {
		const products = await this.productRepository.findAll();
		return products.map(this.toResponse);
	};

	findById = async (id: number): Promise<ResponseProductDto | null> => {
		const product = await this.productRepository.findById(id);
		if (!product) {
			return null;
		}
		return this.toResponse(product);
	};

	create = async (data: CreateProductDto): Promise<ResponseProductDto> => {
		const product = await this.productRepository.create(data);
		return this.toResponse(product);
	};

	private toResponse = (product: Product): ResponseProductDto => {
		return {
			id: product.id,
			name: product.name,
			price: product.price,
			imageUrl: product.imageUrl,
		};
	};
}
