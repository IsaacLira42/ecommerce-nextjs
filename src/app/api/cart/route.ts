import { CartService } from "@/services/Cart.service";
import { CreateCartSchema, UpdateCartSchema } from "@/types/cart/cart.schema";
import { NextResponse } from "next/server";

const cartService = new CartService();

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const data = CreateCartSchema.parse(body);

		const cart = await cartService.create(data);
		return NextResponse.json(cart, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Falha ao tentar criar o carrinho" },
			{ status: 400 }
		);
	}
}

export async function PUT(req: Request) {
	try {
		const body = await req.json();
		const data = UpdateCartSchema.parse(body);

		const cart = await cartService.update(data.id, data);
		return NextResponse.json(cart, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Falha ao tentar atualizar o carrinho" },
			{ status: 400 }
		);
	}
}