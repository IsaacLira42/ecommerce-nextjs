import { CartService } from "@/services/Cart.service";
import { CreateCartSchema } from "@/types/cart/cart.schema";
import { NextResponse } from "next/server";

const serviceCart = new CartService();

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const id = Number(params.id);

		if (isNaN(id)) {
			return NextResponse.json({ error: "ID inválido" }, { status: 400 });
		}

		const cart = await serviceCart.findById(id);

		if (!cart) {
			return NextResponse.json(
				{ error: "Carrinho não encontrado" },
				{ status: 404 }
			);
		}

		return NextResponse.json(cart, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Erro ao buscar carrinho" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const id = Number(params.id);

		if (isNaN(id)) {
			return NextResponse.json({ error: "ID inválido" }, { status: 400 });
		}

		const cart = await serviceCart.delete(id);

		if (!cart) {
			return NextResponse.json(
				{ error: "Carrinho não encontrado" },
				{ status: 404 }
			);
		}

		return NextResponse.json(cart, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Erro ao remover carrinho" },
			{ status: 500 }
		);
	}
}
