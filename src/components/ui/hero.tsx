import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 mb-12 mb:mb-16 lg:mb-20 rounded-2xl bg-lime-200 text-emerald-900">
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
                        <Button className="bg-emerald-900 text-white hover:bg-lime-400 hover:text-emerald-900">
                            <Link href="/products">Ver Produtos</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};