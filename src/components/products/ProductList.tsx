"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ResponseProductDto } from "@/types/product/product.dto";
import { useToast } from "@/hooks/use-toast";

////////////////////////////////////////////////////////////

const MOCK_PRODUCTS: ResponseProductDto[] = [
	{
		id: 1,
		name: "Camiseta Pistache",
		price: 79.9,
		imageUrl:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
	},
	{
		id: 2,
		name: "Tênis Verde Floresta",
		price: 259.9,
		imageUrl:
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
	},
	{
		id: 3,
		name: "Boné Limão",
		price: 49.9,
		imageUrl:
			"https://images.unsplash.com/photo-1528701800489-20be0f5be898?q=80&w=800",
	},
	{
		id: 1,
		name: "Camiseta Pistache",
		price: 79.9,
		imageUrl:
			"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800",
	},
];

////////////////////////////////////////////////////////////

export function ProductList() {
	const [products, setProducts] = useState<ResponseProductDto[]>([]);
	const { toast } = useToast();

	useEffect(() => {
		// fetch("/api/products")
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setProducts(data);
		// 	});
		setProducts(MOCK_PRODUCTS);
	}, []);

	const handleAddToCart = (product: ResponseProductDto) => {
		console.log(`${product.name} adicionado ao carrinho`);
		toast({
			title: "Produto adicionado!",
			description: `${product.name} foi adicionado ao seu carrinho.`,
		});
	};

	return (
		<section className="w-full py-12 md:py-20 lg:py-24">
			<div>
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
					Nossos Produtos
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{products.map((product) => (
						<Card key={product.id}>
							<CardHeader>
								<img
									src={product.imageUrl}
									alt={product.name}
									className="w-full h-48 object-cover rounded-2xl"
								/>
							</CardHeader>
							<CardContent className="text-emerald-900">
								<CardTitle>{product.name}</CardTitle>
								<CardDescription>R$ {product.price.toFixed(2)}</CardDescription>
							</CardContent>
							<CardFooter>
								<Button
									className="w-full bg-lime-500 hover:bg-lime-600"
									onClick={() => handleAddToCart(product)}
								>
									Adicionar ao Carrinho
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
