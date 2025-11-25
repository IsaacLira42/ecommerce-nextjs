import { z } from "zod";

export const ResponseCartSchema = z.object({
	id: z.number(),
	subtotal: z.number(),
	total: z.number(),
});

export const CreateCartSchema = z.object({});
export const UpdateCartSchema = z.object({});
