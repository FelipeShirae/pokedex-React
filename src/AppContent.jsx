import { useContext } from "react";
import { PokemonContext } from "./contexts/PokemonContext";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

import { Container, Typography, Box } from "@mui/material";
 

export default function AppContent() {
  const { state } = useContext(PokemonContext);

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={4}>
        <Typography variant="h4" gutterBottom>
          Pokedex
        </Typography>

        <SearchBar />

        {state.loading && <p>Carregando...</p>}
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}

        <PokemonCard pokemon={state.pokemon} />
      </Box>
    </Container>
  );


  
}