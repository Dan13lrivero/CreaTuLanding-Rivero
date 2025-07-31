import React, { /* useEffect, useState */ } from "react";
import Item from "./Item";  
// import { app } from "../firebase";
// import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const ItemList = ({ products }) => {

  // const [firebaseProducts, setfirebaseProducts] = useState([]);

  /* useEffect(() => {
    handleGetProduct();
  }, []) */

  /* const handleAddProduct = () => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "products");
    addDoc(productsCollection, { name: "New product"});
  } */

  /* const handleGetProduct = () => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "products");
    const elPedido = getDocs(productsCollection)
    elPedido
    .then((response) => {
      console.log("salio todo bien")
      const finalProducts = [];
      response.docs.forEach((product)=>{
        finalProducts.push(product.data())
      })
    })
    .catch(() => {
      console.log("Error al traer los productos")
    })
    console.log(finalProducts);
    setfirebaseProducts(finalProducts);
  } */

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
      {/* <button onClick={handleAddProduct}>Add product</button> */}
      {/* <button onClick={handleGetProduct}>Get product</button> */}
    </>
  );
};

export default ItemList;
