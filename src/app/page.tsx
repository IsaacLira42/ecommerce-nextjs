import { ProductList } from "@/components/products/ProductList";
import { Hero } from "@/components/ui/hero";

export default function Home() {
	return (
		<div>
			<main className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-24 mt-4">
				<Hero />
				<ProductList title={"Mais vendidos"} showAll={false} />
			</main>
		</div>
	);
}
