import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent style={{ textAlign: "center" }}>
        
      
        <Typography variant="h5" gutterBottom>
          {pokemon.name.toUpperCase()}
        </Typography>

       
       <img
        src={
             pokemon.sprites.other?.["official-artwork"]?.front_default ||
                pokemon.sprites.front_default
            }
            alt={pokemon.name}
        />

      
        <Typography>Altura: {pokemon.height}</Typography>
        <Typography>Peso: {pokemon.weight}</Typography>

       
        <Box mt={2}>
          <Typography variant="subtitle1">Tipos:</Typography>
          {pokemon.types.map((t, index) => (
            <Chip
              key={index}
              label={t.type.name}
              color="primary"
              sx={{ m: 0.5 }}
            />
          ))}
        </Box>

        {/* Habilidades */}
        <Box mt={2}>
          <Typography variant="subtitle1">Habilidades:</Typography>
          {pokemon.abilities.map((a, index) => (
            <Chip
              key={index}
              label={a.ability.name}
              variant="outlined"
              sx={{ m: 0.5 }}
            />
          ))}
        </Box>

      </CardContent>
    </Card>


  );


  
}