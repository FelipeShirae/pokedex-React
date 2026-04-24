import { Card, CardContent, Typography } from "@mui/material";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          {pokemon.name.toUpperCase()}
        </Typography>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />

        <Typography>Altura: {pokemon.height}</Typography>
        <Typography>Peso: {pokemon.weight}</Typography>
      </CardContent>
    </Card>
  );

  
}