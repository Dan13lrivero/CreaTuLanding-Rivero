import React from 'react';
import ItemCount from './ItemCount'; 
import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';
import { useParams } from "react-router-dom";

export const ItemDetail = ({ product, onAdd }) => {
  const result = useParams()
  const result2 = useContext(CartContext)

  const handleClick = () => {
    result2.setCantidad(2)
  }
  return (
    <div className="item-detail text-white text-center d-flex flex-column align-items-center">
      <h2>{product.title}</h2>
      <h3>{product.band}</h3>
      <img
        src={`/CreaTuLanding-Rivero/img/${product.image}`}
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

      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      <button onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDetail;
