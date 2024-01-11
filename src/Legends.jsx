import React, { useState } from "react";
import Component from "./MyComponent";
import Ranger from "./Assets/Archer.png";

export default function Legends() {
  const legendMap = [
    {
      image: Ranger,
      nameMap: "Ranger",
      flavourTextMap: "Backline Ranger",
      health: 10,
      attack: 10,
      rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Cleric",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Wizard",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Rogue",
      flavourTextMap:"",
      health: 10,
      attack: 10,
        rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Druid",
      flavourTextMap:"",
      health: 10,
      attack: 10,
        rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"FortKnight",
      flavourTextMap:"",
      health: 10,
      attack: 10,
      rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Dummy",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Knight",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Alchemist",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Candleman",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Merchant",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Monk",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Bard",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Puppeteer",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Paladin",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Necromancer",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
    {
      image: Ranger,
      nameMap:"Spirit Master",
      flavourTextMap:"",
      health: 10,
      attack: 10,
       rarity: "Common",
    },
  ];

  return (
    <main>
      <header>
      <h1>Legends</h1>
      <p>Legends are the characters you play in the game and each have their own unique stats and gimmicks.</p>
      </header>
      <body>
      {legendMap.map((fella, index) => (
        <Component
          key={index}
          image={fella.image}
          name={fella.nameMap}
          flavorText={fella.flavourTextMap}
          health={fella.health}
          attack={fella.attack}
          rarity={fella.rarity}
        />
      ))}
      </body>
    </main>
  );
}
