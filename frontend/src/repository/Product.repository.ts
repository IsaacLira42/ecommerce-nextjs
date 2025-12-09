import { Product } from "@prisma/client";
import prisma from "@/lib/prisma";
import { CreateProductDto } from "@/types/product/product.dto";

export class ProductRepository {
	async findAll(): Promise<Product[]> {
		return await prisma.product.findMany();
	}

	async findById(id: number): Promise<Product | null> {
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
