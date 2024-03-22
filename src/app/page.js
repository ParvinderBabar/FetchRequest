"use client"

import Dogs from "./Components/Dogs.js";
import Memes from "./Components/Memes.jsx";

import Pokemon from "./Components/Pokemon"; // Adjust the path based on your project structure
import Beer from "./Components/Beer.jsx"
export default function Home() {
  
  return (
    <div >
      <h1>Fetching API using usestate,useEffect</h1>
      <Dogs/>
      <hr>
      </hr>
      <Memes />
      <hr></hr>
      <Pokemon />
      <hr></hr>
      <Beer/>

    </div>
  );
}