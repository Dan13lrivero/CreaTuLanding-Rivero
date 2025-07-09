import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const cats = Array.from(new Set(data.map((p) => p.category)));
        setCategories(cats);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products.json:", err);
        setLoading(false);
      });
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
                  src="/CreaTuLanding-Rivero/img/greeting.png"
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
                  src="/CreaTuLanding-Rivero/img/greeting.png"
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

