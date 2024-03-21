"use client"

import Dogs from "./Components/Dogs.js";
import Pokemon from "./Components/Pokemon"; // Adjust the path based on your project structure

export default function Home() {
  
  return (
    <div >
      <Dogs/>
      <hr>
      </hr>
      <Memes />
      <hr></hr>
      <Pokemon />
      <hr></hr>

    </div>
  );
}