import React from 'react';
import ProductCard from './ProductCard';

const ItemListContainer = ({ greeting, products }) => {
  return (
    <>
      <div>{greeting}</div>
      <div className="product-list d-flex flex-wrap justify-content-center gap-3">
        {products && products.map(product => (
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
