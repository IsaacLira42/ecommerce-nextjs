import { ProductService } from "@/services/Product.service";
import { NextResponse } from "next/server";

const productService = new ProductService();

export async function GET() {
	try {
		const products = await productService.findAll();
		return NextResponse.json(products);
	} catch (error) {
		return NextResponse.json(
			{ error: "Erro ao listar os produtos" },
			{ status: 500 }
		);
	}
}
