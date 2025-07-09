import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, band, title, price, image }) => {
  return (
    <div className="product-card d-flex flex-column align-items-center">
      <Link to={`/item/${id}`}>
        <img
          src={`${import.meta.env.BASE_URL}img/${image}`}
          alt={`${band} - ${title}`}
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <h3 className='text-white fs-1'>{band} - {title}</h3>
      <p className='text-white fs-2'>Price: ${price}</p>
      <Link to={`/item/${id}`}>
        <button>About</button>
      </Link>
    </div>
  );
};

export default Item;
