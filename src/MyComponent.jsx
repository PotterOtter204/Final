import "./Component.css";
import { useState } from "react";
import Rune from "./Assets/Stone.png";
import Cosmic from "./Assets/Cosmic.png";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function Component({
  image,
  name,
  flavorText,
  health,
  attack,
  rarity,
}) {
  const [hp, setHp] = useState(health);
  const [atk, setAtk] = useState(attack);

  return (
    <div className="Edge">
      <Grid container spacing={2}>
        <Grid xs={8}>
          <header className="Name">
            <h1 className="nameText">{name}</h1>
          </header>
        </Grid>
        <Grid xs={8}>
          <main className="Comp">
            <p className="rarity">Rarity: {rarity}</p>
            <p className="flavor"> {flavorText}</p>
          </main>
        </Grid>
        <Grid xs={4}>
          <img className="Sprite" src={image} />
          <p className="ATK">Attack: {display}</p>
          <p className="HP">Health: {hp}</p>
        </Grid>
      </Grid>
    </div>
  );
}
