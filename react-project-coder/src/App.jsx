import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const products = [
  { id: "1", band: "Slayer", title: "Reign in Blood", price: 25, image:"Slayer-Reign-In-Blood.jpg" },
  { id: "2", band: "Metallica", title: "Master of Puppets", price: 30, image:"metallica-master-of-puppets.webp" },
  { id: "3", band: "Sepultura", title: "Quadra", price: 28, image:"sepultura-quadra.jpg" }
];

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Welcome to the most brutal metal record store!" products={products}/>
    </>
  );
};

export default App;
