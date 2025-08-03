import { useContext, useState } from "react";
import { CartContext } from "../providers/CartProvider";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export function CheckoutForm({ setMensaje }) {
  const { carrito, precioTotal, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ nombre: "", email: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email) {
      setMensaje("Please fill in all the fields.");
      return;
    }

    if (carrito.length === 0) {
      setMensaje("Cart is empty.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "ordenes"), {
        cliente: formData,
        carrito,
        total: precioTotal,
        fecha: new Date()
      });

      setMensaje(`Purchase successful! Order ID: ${docRef.id}`);
      setFormData({ nombre: "", email: "" });
      clearCart();
    } catch (error) {
      console.error(error);
      setMensaje("Error sending the order. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Name</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="form-control"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
}
