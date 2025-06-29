import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const products = [
  { id: "1", band: "Slayer", title: "Reign in Blood", price: 25, image:"Slayer-Reign-In-Blood.jpg" },
  { id: "2", band: "Metallica", title: "Master of Puppets", price: 30, image:"metallica-master-of-puppets.webp" },
  { id: "3", band: "Sepultura", title: "Quadra", price: 28, image:"sepultura-quadra.jpg" },
  { id: "4", band: "Megadeth", title: "Rust in Peace", price: 40, image:"megadeth-rust-in-peace.webp" },
  { id: "5", band: "Sepultura", title: "Roots Bloody Roots", price: 45, image:"sepultura-roots-bloody-roots.jpeg" },
  { id: "6", band: "Slayer", title: "Show No Mercy", price: 50, image:"slayer-show-no-mercy.jpeg" },
  { id: "7", band: "Metallica", title: "Black Album", price: 35, image:"metallica-black-album.jpeg" },
  { id: "8", band: "Slayer", title: "God Hates Us All", price: 35, image:"slayer-god-hates-us-all.jpeg" },
  { id: "9", band: "Metallica", title: "Kill em All", price: 40, image:"metallica-kill-em-all.jpeg" }

];

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={<img className="d-block mx-auto greeting" src="/CreaTuLanding-Rivero/img/greeting.png" alt="greeting" />} products={products} />

    </>
  );
};

export default App;
