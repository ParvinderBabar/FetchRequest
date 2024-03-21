"use client"

import React from "react";
import { useEffect, useState } from "react";


const initialPokemonName = "ditto";
const initialUrl = `https://pokeapi.co/api/v2/pokemon/${initialPokemonName}`;

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState(initialPokemonName);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemonData(initialUrl);
  }, []);

  const fetchPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null); // Reset error if successful
    } catch (error) {
      console.log(error);
      setError("Failed to fetch data. Please check the Pokémon name and try again.");
    }
  };

  const handleInputChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetchPokemonData(newUrl);
  };

  return (
    <div >
      {error ? (
        <div>{error}</div>
      ) : pokemonData ? (
        <div>
          <h1>Pokemon</h1>
          <p>
            Here's a Pokemon API:
            <a href={initialUrl}>{initialUrl}</a>, you can search for other Pokémon by entering their name.
          </p>
          <h1>{pokemonData.name}</h1>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={pokemonName}
              onChange={handleInputChange}
              placeholder="Enter Pokémon name"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}