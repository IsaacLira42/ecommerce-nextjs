import { z } from "zod";
import {
	CreateCartItemSchema,
	ResponseCartItemSchema,
	UpdateCartItemSchema,
} from "./CartItem.schema";

export type CreateCartItemDto = z.infer<typeof CreateCartItemSchema>;
export type ResponseCartItemDto = z.infer<typeof ResponseCartItemSchema>;
export type UpdateCartItemDto = z.infer<typeof UpdateCartItemSchema>;
