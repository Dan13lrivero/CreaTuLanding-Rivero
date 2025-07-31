import React, { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


const CartWidget = () => {
  const { cantidad } = useContext(CartContext);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span role="img" aria-label="cart" style={{fontSize: '6rem'}}>🛒</span>
      {cantidad > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-10px',
            background: 'black',
            borderRadius: '50%',
            color: 'white',
            fontSize: '1.75rem',
            padding: '2px 6px'
          }}
        >
          {cantidad}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
