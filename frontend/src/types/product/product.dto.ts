import z from "zod";
import {
	CreateProductSchema,
	ResponseProductSchema,
	UpdateProductSchema,
} from "./product.schema";

export type CreateProductDto = z.infer<typeof CreateProductSchema>;
export type ResponseProductDto = z.infer<typeof ResponseProductSchema>;
export type UpdateProductDto = z.infer<typeof UpdateProductSchema>;
