import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = CartContext.Provider;

export function CustomCartProvider({ children }) {

    const [cantidad, setCantidad] = useState(0);

    const elValorDelContexto = {
        cantidad: cantidad,
        precioTotal: 0,
        carrito: [],
        setCantidad: setCantidad
    }
    return (
        <CartProvider value={elValorDelContexto}>
            {children}
        </CartProvider>
    )
} 