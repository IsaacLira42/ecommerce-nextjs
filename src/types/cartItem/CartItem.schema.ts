import { z } from "zod";

export const CreateCartItemSchema = z.object({
	quantity: z.number().int().positive("A quantidade deve ser um numero positivo"),
	productId: z.number().int("O ID do produto deve ser um numero inteiro"),
	cartId: z.number().int("O ID do carrinho deve ser um numero inteiro"),
});

export const ResponseCartItemSchema = z.object({
	id: z.number(),
	quantity: z.number(),
	productId: z.number(),
	cartId: z.number(),
});

export const UpdateCartItemSchema = z.object({
	quantity: z.number().int().positive("A quantidade deve ser um numero positivo").optional(),
});
