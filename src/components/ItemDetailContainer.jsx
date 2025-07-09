import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ products }) => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const found = products.find((p) => p.id === itemId);
      setProduct(found || null);
      setLoading(false);
    }, 3000);
  }, [itemId, products]);

  if (loading) return <p className="text-white text-center fs-1">Loading product...</p>;
  if (!product) return <p className="text-white text-center fs-1">Product not found.</p>;

  return (
    <ItemDetail product={product} onAdd={(count) => console.log(`Added ${count} units to cart`)} />
  );
};

export default ItemDetailContainer;
