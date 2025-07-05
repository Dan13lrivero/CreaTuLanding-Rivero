import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

const products = [
  {
    id: "1",
    band: "Slayer",
    title: "Reign in Blood",
    price: 25,
    image: "Slayer-Reign-In-Blood.jpg",
    category: "slayer",
    year: 1986,
    songs: [
      "Angel of Death",
      "Piece by Piece",
      "Necrophobic",
      "Altar of Sacrifice",
      "Jesus Saves",
      "Criminally Insane",
      "Reborn",
      "Epidemic",
      "Postmortem",
      "Raining Blood"
    ],
    lineup: ["Tom Araya", "Kerry King", "Jeff Hanneman", "Dave Lombardo"]
  },
  {
    id: "2",
    band: "Metallica",
    title: "Master of Puppets",
    price: 30,
    image: "metallica-master-of-puppets.webp",
    category: "metallica",
    year: 1986,
    songs: [
      "Battery",
      "Master of Puppets",
      "The Thing That Should Not Be",
      "Welcome Home (Sanitarium)",
      "Disposable Heroes",
      "Leper Messiah",
      "Orion",
      "Damage, Inc."
    ],
    lineup: ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Cliff Burton"]
  },
  {
    id: "3",
    band: "Sepultura",
    title: "Quadra",
    price: 28,
    image: "sepultura-quadra.jpg",
    category: "sepultura",
    year: 2020,
    songs: [
      "Isolation",
      "Last Time",
      "Means to an End",
      "Guardians of Earth",
      "Capital Enslavement",
      "Fear, Pain, Chaos, Suffering",
      "The Pentagram",
      "Agony of Defeat",
      "Vandals Nest",
      "Autem",
      "Predators of Civilization"
    ],
    lineup: ["Derrick Green", "Andreas Kisser", "Paulo Jr.", "Eloy Casagrande"]
  },
  {
    id: "4",
    band: "Megadeth",
    title: "Rust in Peace",
    price: 40,
    image: "megadeth-rust-in-peace.webp",
    category: "megadeth",
    year: 1990,
    songs: [
      "Holy Wars... The Punishment Due",
      "Hangar 18",
      "Take No Prisoners",
      "Five Magics",
      "Poison Was the Cure",
      "Lucretia",
      "Tornado of Souls",
      "Dawn Patrol",
      "Rust in Peace... Polaris"
    ],
    lineup: ["Dave Mustaine", "Marty Friedman", "David Ellefson", "Nick Menza"]
  },
  {
    id: "5",
    band: "Sepultura",
    title: "Roots Bloody Roots",
    price: 45,
    image: "sepultura-roots-bloody-roots.jpeg",
    category: "sepultura",
    year: 1996,
    songs: [
      "Roots Bloody Roots",
      "Attitude",
      "Cut-Throat",
      "Jumpdafuckup",
      "Dictatorshit",
      "Lookaway",
      "Endangered Species",
      "Breed Apart",
      "Transparency",
      "Dictatorshit",
      "Itsári"
    ],
    lineup: ["Max Cavalera", "Andreas Kisser", "Paulo Jr.", "Igor Cavalera"]
  },
  {
    id: "6",
    band: "Slayer",
    title: "Show No Mercy",
    price: 50,
    image: "slayer-show-no-mercy.jpeg",
    category: "slayer",
    year: 1983,
    songs: [
      "Evil Has No Boundaries",
      "The Antichrist",
      "Die by the Sword",
      "Fight Till Death",
      "Metal Storm / Face the Slayer",
      "Black Magic",
      "Tormentor",
      "The Final Command",
      "Crionics",
      "Show No Mercy"
    ],
    lineup: ["Tom Araya", "Kerry King", "Jeff Hanneman", "Dave Lombardo"]
  },
  {
    id: "7",
    band: "Metallica",
    title: "Black Album",
    price: 35,
    image: "metallica-black-album.jpeg",
    category: "metallica",
    year: 1991,
    songs: [
      "Enter Sandman",
      "Sad but True",
      "Holier Than Thou",
      "The Unforgiven",
      "Wherever I May Roam",
      "Don't Tread on Me",
      "Through the Never",
      "Nothing Else Matters",
      "Of Wolf and Man",
      "The God That Failed",
      "My Friend of Misery",
      "The Struggle Within"
    ],
    lineup: ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Jason Newsted"]
  },
  {
    id: "8",
    band: "Slayer",
    title: "God Hates Us All",
    price: 35,
    image: "slayer-god-hates-us-all.jpeg",
    category: "slayer",
    year: 2001,
    songs: [
      "Disciple",
      "God Send Death",
      "New Faith",
      "Bloodline",
      "Desecrator",
      "Threshold",
      "Hate Worldwide",
      "Dissident Aggressor",
      "Serenity in Murder",
      "Seven Faces",
      "American Jesus",
      "Refuse/Resist"
    ],
    lineup: ["Tom Araya", "Kerry King", "Jeff Hanneman", "Paul Bostaph"]
  },
  {
    id: "9",
    band: "Metallica",
    title: "Kill em All",
    price: 40,
    image: "metallica-kill-em-all.jpeg",
    category: "metallica",
    year: 1983,
    songs: [
      "Hit the Lights",
      "The Four Horsemen",
      "Motorbreath",
      "Jump in the Fire",
      "(Anesthesia) Pulling Teeth",
      "Whiplash",
      "Phantom Lord",
      "No Remorse",
      "Seek & Destroy",
      "Metallica"
    ],
    lineup: ["James Hetfield", "Lars Ulrich", "Dave Mustaine", "Cliff Burton"]
  }
];


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
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
          path="/product/:productId"
          element={<ItemDetailContainer products={products} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
