"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { ResponseProductDto } from "@/types/product/product.dto";

type CartItem = {
    product: ResponseProductDto;
    quantity: number;
};

type CartContextValue = {
    items: CartItem[];
    subtotal: number;
    total: number;
    addItem: (product: ResponseProductDto) => void;
    removeItem: (productId: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: ResponseProductDto) => {
        setItems((current) => {
            const existing = current.find((item) => item.product.id === product.id);

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

    const value: CartContextValue = {
        items,
        subtotal,
        total,
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
