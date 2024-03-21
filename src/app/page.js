"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Pokemon from "./Components/Pokemon"; // Adjust the path based on your project structure

export default function Home() {
  
  return (
    <div >
      <Pokemon />
      <hr></hr>
      
    </div>
  );
}