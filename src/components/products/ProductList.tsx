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
import { useCart } from "@/components/cart/CartProvider";


/* DADOS MOCKADOS PARA TESTE */
/*
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
*/

interface PropetiesProductList {
	title: string;
}

export function ProductList({ title }: PropetiesProductList) {
	const [products, setProducts] = useState<ResponseProductDto[]>([]);
	const { toast } = useToast();
	const { addItem } = useCart();

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const response = await fetch("/api/products");
				if (!response.ok) {
					throw new Error("Falha ao carregar produtos");
				}
				const data: ResponseProductDto[] = await response.json();
				setProducts(data);
			} catch (error) {
				console.error(error);
				toast({
					title: "Erro ao carregar produtos",
					description: "Tente novamente mais tarde.",
				});
			}
		};

		loadProducts();
	}, [toast]);

	const handleAddToCart = (product: ResponseProductDto) => {
		addItem(product);
		toast({
			title: "Produto adicionado!",
			description: `${product.name} foi adicionado ao seu carrinho.`,
		});
	};

	return (
		<section className="w-full">
			<div>
				<h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
					{title}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
