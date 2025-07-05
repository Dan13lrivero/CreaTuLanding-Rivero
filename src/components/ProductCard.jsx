import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, band, title, price, image }) => {
  return (
    <div className="product-card d-flex flex-column align-items-center">
      <Link to={`/product/${id}`}>
        <img
          src={`${import.meta.env.BASE_URL}img/${image}`}
          alt={`${band} - ${title}`}
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <h3 className='text-white fs-1'>{band} - {title}</h3>
      <p className='text-white fs-2'>Price: ${price}</p>
      <Link to={`/product/${id}`}>
        <button>About</button>
      </Link>
    </div>
  );
};

export default ProductCard;
