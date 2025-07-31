import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = CartContext.Provider;

export function CustomCartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const addToCart = (producto, qty) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, quantity: qty }]);
    }

    setCantidad((prev) => prev + qty);
  };

  const clearCart = () => {
    setCarrito([]);
    setCantidad(0);
  };

  const precioTotal = carrito.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const elValorDelContexto = {
    cantidad,
    precioTotal,
    carrito,
    addToCart,
    clearCart,
  };

  return <CartProvider value={elValorDelContexto}>{children}</CartProvider>;
}
