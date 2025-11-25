import z from "zod";

const CreateProductSchema = z.object({
	name: z
		.string()
		.min(3, "O nome deve conter pelo menos 3 letras")
		.max(50, "O nome pode conter no maximo 3 letras"),
	price: z.number().positive("O preco não pode ser negativo"),
	imageUrl: z.url(),
});

const ResponseProductSchema = z.object({
	id: z.number(),
	name: z.string(),
	price: z.number(),
	imageUrl: z.url(),
});

const UpdateProductSchema = CreateProductSchema.partial();

export { CreateProductSchema, ResponseProductSchema, UpdateProductSchema };
