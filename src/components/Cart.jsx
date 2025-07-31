import { useContext, useState } from "react";
import { CartContext } from "../providers/CartProvider";
import { CheckoutForm } from "./CheckoutForm";

export function Cart() {
  const { carrito, precioTotal } = useContext(CartContext);
  const [mensaje, setMensaje] = useState("");

  const compraExitosa = mensaje.includes("Purchase successful");

  return (
    <div className="container text-white">
      <h2 className="text-center my-4">Cart</h2>

      {mensaje && <p className="mt-3 text-center">{mensaje}</p>}

      {carrito.length === 0 && !mensaje ? (
        <p className="text-center">Cart is empty.</p>
      ) : (
        <>
          {carrito.length > 0 && (
            <>
              <ul className="list-group mb-4">
                {carrito.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item bg-dark text-white d-flex justify-content-between"
                  >
                    <div>
                      <strong>{item.title}</strong> ({item.band}) x {item.quantity}
                    </div>
                    <div>${item.price * item.quantity}</div>
                  </li>
                ))}
              </ul>

              <h4 className="text-end">Total: ${precioTotal}</h4>
            </>
          )}

          
          {!compraExitosa && <CheckoutForm setMensaje={setMensaje} />}
        </>
      )}
    </div>
  );
}
