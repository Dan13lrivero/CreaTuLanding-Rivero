import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ItemListContainer = ({ greeting, products }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId && categoryId !== "all") {
          resolve(products.filter((p) => p.category === categoryId));
        } else {
          resolve(products);
        }
      }, 3000);
    });

    fetchProducts.then((res) => {
      setFilteredProducts(res);
      setLoading(false);
    });
  }, [categoryId, products]);

  if (loading) return <p className="text-white text-center fs-1">Loading products...</p>;

  return (
    <>
      <div>{greeting}</div>
      <div className="product-list d-flex flex-wrap justify-content-center gap-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            band={product.band}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
