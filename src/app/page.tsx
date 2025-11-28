import { ProductList } from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<main className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-24 mt-4">
				<section className="w-full py-12 md:py-24 lg:py-32 mb-12 mb:mb-20 lg:mb-32 rounded-2xl bg-lime-200 text-emerald-900">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Descubra Produtos Incríveis
								</h1>
								<p className="mx-auto max-w-2xl md:text-xl">
									Explore nossa vasta seleção de produtos de alta qualidade para
									todas as suas necessidades.
								</p>
							</div>
							<div className="space-x-4">
								<Button
									variant="outline"
									className="text-emerald-900 bordxt-emetext-emerald-900 hover:xt-emetext-emerald-900"
								>
									Saiba Mais
								</Button>
								<Button className="bg-emerald-900 text-white hover:bg-lime-400 hover:text-emerald-900">
									Ver Produtos
								</Button>
							</div>
						</div>
					</div>
				</section>

				<ProductList title={"Mais vendidos"} />
			</main>
		</div>
	);
}
