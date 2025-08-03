import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import { Cart } from "./components/Cart";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleGetProduct = async () => {
      try {
        const db = getFirestore(app);
        const productsCollection = collection(db, "products");
        const response = await getDocs(productsCollection);
        const finalProducts = response.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(finalProducts);
        const cats = Array.from(new Set(finalProducts.map(p => p.category)));
        setCategories(cats);
        setLoading(false);
      } catch (error) {
        console.error("Error al traer los productos", error);
        setLoading(false);
      }
    };

    handleGetProduct();
  }, []);

  if (loading) {
    return <p className="text-white text-center fs-1">Loading products...</p>;
  }

  return (
    <BrowserRouter>
      <NavBar categories={categories} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting={
                <img
                  className="d-block mx-auto greeting"
                  src="/img/greeting.png"
                  alt="greeting"
                />
              }
              products={products}
            />
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
              greeting={
                <img
                  className="d-block mx-auto greeting"
                  src="/img/greeting.png"
                  alt="greeting"
                />
              }
              products={products}
            />
          }
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer products={products} />}
        />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
