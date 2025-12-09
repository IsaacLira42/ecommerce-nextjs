"use client";

import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/button";

const CartPage = () => {
    const { items, subtotal, total, removeItem, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <main className="px-4 lg:px-24 mt-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold mb-2">Seu carrinho está vazio</h1>
                <p className="text-gray-600 mb-4 max-w-md">
                    Adicione alguns produtos à sua sacola para vê-los aqui.
                </p>
            </main>
        );
    }

    return (
        <main className="px-4 lg:px-24 mt-8 mb-12 min-h-[60vh]">
            <h1 className="text-3xl font-bold mb-6">Carrinho</h1>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
                <section className="space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.product.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4"
                        >
                            <div>
                                <p className="font-medium text-lg">{item.product.name}</p>
                                <p className="text-sm text-gray-600">
                                    Qtd: {item.quantity} · R$ {item.product.price.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-base font-semibold">
                                    R$ {(item.product.price * item.quantity).toFixed(2)}
                                </span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => removeItem(item.product.id)}
                                >
                                    Remover
                                </Button>
                            </div>
                        </div>
                    ))}
                </section>

                <aside className="border rounded-lg p-4 space-y-4 bg-white">
                    <h2 className="text-xl font-semibold">Resumo</h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between font-semibold text-base">
                            <span>Total</span>
                            <span>R$ {total.toFixed(2)}</span>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full text-red-500 border-red-200 hover:bg-red-50 mb-2"
                        onClick={clearCart}
                    >
                        Limpar carrinho
                    </Button>
                    <Button className="w-full bg-emerald-900 text-white hover:bg-lime-400 hover:text-emerald-900">
                        Finalizar compra
                    </Button>
                </aside>
            </div>
        </main>
    );
};

export default CartPage;
