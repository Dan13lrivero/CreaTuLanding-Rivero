import React, { /* useEffect, useState */ } from "react";
import Item from "./Item";  

const ItemList = ({ products }) => {

  return (
    <>
      <div className="product-list d-flex flex-wrap justify-content-center gap-3">
        {products.map((product) => (
          <Item
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

export default ItemList;
