import { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { PokemonContext } from "../contexts/PokemonContext";

export default function SearchBar() {
  const [nome, setNome] = useState("");
  const { buscarPokemon } = useContext(PokemonContext);

  const handleBuscar = () => {
    buscarPokemon(nome.toLowerCase());
  };

  return (
    <Box display="flex" gap={2} justifyContent="center" mb={2}>
      <TextField
        label="Nome do Pokémon"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button variant="contained" onClick={handleBuscar}>
        Buscar
      </Button>
    </Box>
  );


  
}