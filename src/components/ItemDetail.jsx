import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount'; 
import { CartContext } from '../providers/CartProvider';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false); 

  const handleAdd = (count) => {
    addToCart(product, count);
    setAdded(true); 
  };

  return (
    <div className="item-detail text-white text-center d-flex flex-column align-items-center">
      <h2>{product.title}</h2>
      <h3>{product.band}</h3>
      <img
        src={`/img/${product.image}`}
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

      
      {added ? (
        <Link to="/cart" className="btn btn-success mt-3">Finish Purchase</Link>
      ) : (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
