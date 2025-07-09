import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting, products }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const filtered =
        categoryId && categoryId !== "all"
          ? products.filter((p) => p.category === categoryId)
          : products;
      setFilteredProducts(filtered);
      setLoading(false);
    }, 3000);
  }, [categoryId, products]);

  if (loading) return <p className="text-white text-center fs-1">Loading products...</p>;
  if (!filteredProducts.length) return <p className="text-white text-center fs-1">No products available.</p>;

  return (
    <>
      <div>{greeting}</div>
      <ItemList products={filteredProducts} />
    </>
  );
};

export default ItemListContainer;
