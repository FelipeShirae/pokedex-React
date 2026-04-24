import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

export default function PokemonCard() {
  const { state } = useContext(PokemonContext);

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <Typography color="error">{state.error}</Typography>;
  }

  if (!state.pokemon) {
    return null;
  }

  return (
    <Card style={{ marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h5">
          {state.pokemon.name}
        </Typography>

        <img
          src={state.pokemon.sprites.front_default}
          alt={state.pokemon.name}
        />

        <Typography>
          Altura: {state.pokemon.height}
        </Typography>

        <Typography>
          Peso: {state.pokemon.weight}
        </Typography>
      </CardContent>
    </Card>
  );
}