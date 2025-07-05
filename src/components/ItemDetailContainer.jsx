import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetailContainer = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const found = products.find((p) => p.id === productId);
        resolve(found || null);
      }, 500);
    });

    fetchProduct.then((prod) => {
      setProduct(prod);
      setLoading(false);
    });
  }, [productId, products]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="item-detail text-white text-center d-flex flex-column align-items-center">
  <h2>{product.title}</h2>
  <h3>{product.band}</h3>
  <img
    src={`/CreaTuLanding-Rivero/img/${product.image}`}
    alt={product.title}
    style={{ maxWidth: "300px" }}
    className="mb-3"
  />
  <p>Price: ${product.price}</p>

  <h4>Release year:</h4>
  <p>{product.year}</p>

  <h4>Songs:</h4>
  <ul className="list-unstyled">
    {product.songs.map((song, index) => (
      <li key={index}>{song}</li>
    ))}
  </ul>

  <h4>Lineup:</h4>
  <ul className="list-unstyled">
    {product.lineup.map((member, index) => (
      <li key={index}>{member}</li>
    ))}
  </ul>

  <ItemCount
    stock={10}
    initial={1}
    onAdd={(count) => console.log(`Agregaste ${count} unidades`)}
  />
</div>

  );
};

export default ItemDetailContainer;
