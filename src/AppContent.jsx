import { useContext } from "react";
import { PokemonContext } from "./contexts/PokemonContext";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

export default function AppContent() {
  const { state } = useContext(PokemonContext);

  return (
    <div>
      <h1>Pokedex</h1>

      <SearchBar />

      {state.loading && <p>Carregando...</p>}
      {state.error && <p>{state.error}</p>}

      <PokemonCard pokemon={state.pokemon} />
    </div>
  );
}