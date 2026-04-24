import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}