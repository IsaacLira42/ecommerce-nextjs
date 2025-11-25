import { z } from "zod";
import {
	CreateCartSchema,
	ResponseCartSchema,
	UpdateCartSchema,
} from "./cart.schema";

export type CreateCartDto = z.infer<typeof CreateCartSchema>;
export type ResponseCartDto = z.infer<typeof ResponseCartSchema>;
export type UpdateCartDto = z.infer<typeof UpdateCartSchema>;
