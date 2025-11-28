"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { ResponseProductDto } from "@/types/product/product.dto";

type CartItem = {
    product: ResponseProductDto;
    quantity: number;
};

type CartContextValue = {
    items: CartItem[];
    subtotal: number;
    total: number;
    cartId: number | null;
    addItem: (product: ResponseProductDto) => void;
    removeItem: (productId: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [cartId, setCartId] = useState<number | null>(null);

    useEffect(() => {
        const storedId = window.localStorage.getItem("cartId");

        if (!storedId) {
            return;
        }

        const id = Number(storedId);

        const loadCart = async () => {
            try {
                const response = await fetch(`/api/cart/${id}`);

                if (!response.ok) {
                    return;
                }

                const data = await response.json();

                setCartId(data.id);

                if (Array.isArray(data.items)) {
                    setItems(
                        data.items.map((item: any) => ({
                            product: {
                                id: item.product.id,
                                name: item.product.name,
                                price: item.product.price,
                                imageUrl: item.product.imageUrl,
                            },
                            quantity: item.quantity,
                        }))
                    );
                }
            } catch (error) {
                console.error(error);
            }
        };

        loadCart();
    }, []);

    const addItem = (product: ResponseProductDto) => {
        setItems((current) => {
            const existing = current.find((item) => item.product.id === product.id);

            // se o Item ja existe, aumenta a quantidade
            if (existing) {
                return current.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...current, { product, quantity: 1 }];
        });
    };

    const removeItem = (productId: number) => {
        setItems((current) =>
            current.filter((item) => item.product.id !== productId)
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const { subtotal, total } = useMemo(() => {
        const subtotalValue = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
        return {
            subtotal: subtotalValue,
            total: subtotalValue,
        };
    }, [items]);

    useEffect(() => {
        const syncCart = async () => {
            // se nao tiver itens e nao tiver id, sai.
            if (items.length === 0 && !cartId) {
                return;
            }

            // se nao tiver id, cria um.
            const payload = {
                items: items.map((item) => ({
                    productId: item.product.id,
                    quantity: item.quantity,
                })),
                subtotal,
                total,
            };

            try {
                if (!cartId) {
                    const response = await fetch("/api/cart", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(payload),
                    });

                    if (!response.ok) {
                        throw new Error("Falha ao criar carrinho");
                    }

                    const data = await response.json();
                    setCartId(data.id);

                    if (typeof window !== "undefined") {
                        window.localStorage.setItem("cartId", String(data.id));
                    }

                } else {
                    const response = await fetch("/api/cart", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ id: cartId, ...payload }),
                    });

                    if (!response.ok) {
                        throw new Error("Falha ao atualizar carrinho");
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        syncCart();
    }, [items, subtotal, total, cartId]);

    const value: CartContextValue = {
        items,
        subtotal,
        total,
        cartId,
        addItem,
        removeItem,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export type { CartItem, CartContextValue };
