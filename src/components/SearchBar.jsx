import { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { PokemonContext } from "../contexts/PokemonContext";

export default function SearchBar() {
  const [nome, setNome] = useState("");
  const { buscarPokemon } = useContext(PokemonContext);

  const handleBuscar = () => {
    buscarPokemon(nome.toLowerCase());
    
  };

  return (
    <div>
      <TextField
        label="Nome do Pokémon"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button variant="contained" onClick={handleBuscar}>
        Buscar
      </Button>
    </div>

  );

}