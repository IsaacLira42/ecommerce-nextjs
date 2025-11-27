import { Product } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import {
	CreateProductDto,
	ResponseProductDto,
} from "@/types/product/product.dto";

export class ProductRepository {
	async findAll(): Promise<ResponseProductDto[]> {
		return await prisma.product.findMany();
	}

	async findById(id: number): Promise<ResponseProductDto | null> {
		return await prisma.product.findUnique({
			where: {
				id: id,
			},
		});
	}

	async create(data: CreateProductDto): Promise<Product> {
		return await prisma.product.create({ data });
	}
}
