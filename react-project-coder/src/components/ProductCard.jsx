import React from 'react';


const ProductCard = ({ band, title, price, image }) => {
  return (
    <div className="product-card d-flex flex-column align-items-center">
      <img src={`${import.meta.env.BASE_URL}img/${image}`} alt={`${band} - ${title}`} />
      <h3>{band} - {title}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductCard;

