import { z } from "zod";

const CartItemProductSchema = z.object({
	id: z.number(),
	name: z.string(),
	price: z.number(),
	imageUrl: z.string(),
});

export const ResponseCartItemSchema = z.object({
	productId: z.number(),
	quantity: z.number().int().min(1),
	product: CartItemProductSchema,
});

export const ResponseCartSchema = z.object({
	id: z.number(),
	subtotal: z.number(),
	total: z.number(),
	items: z.array(ResponseCartItemSchema),
});

const CartItemInputSchema = z.object({
	productId: z.number(),
	quantity: z.number().int().min(1),
});

export const CreateCartSchema = z.object({
	items: z.array(CartItemInputSchema),
	subtotal: z.number(),
	total: z.number(),
});

export const UpdateCartSchema = CreateCartSchema.extend({
	id: z.number(),
});
