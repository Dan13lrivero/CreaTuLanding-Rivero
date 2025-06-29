import React from 'react';


const ProductCard = ({ band, title, price, image }) => {
  return (
    <div className="product-card d-flex flex-column align-items-center">
      <img src={`${import.meta.env.BASE_URL}img/${image}`} alt={`${band} - ${title}`} />
      <h3 className='text-white fs-1'>{band} - {title}</h3>
      <p className='text-white fs-2'>Price: ${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

