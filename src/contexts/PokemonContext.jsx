import { createContext, useReducer } from "react";
import { pokemonReducer, initialState } from "./pokemonReducer";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
}