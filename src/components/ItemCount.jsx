import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div>
      <div>
        <button onClick={decrement} disabled={count <= 1}>
          -
        </button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={increment} disabled={count >= stock}>
          +
        </button>
      </div>
      <button onClick={handleAdd} style={{ marginTop: "10px" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
