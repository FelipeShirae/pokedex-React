import { createContext, useReducer } from "react";
import { pokemonReducer, initialState } from "./PokemonReducer";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const buscarPokemon = async (nome) => {
    if (!nome) {
      dispatch({ type: "ERROR", payload: "Digite um nome!" });
      return;
    }

    dispatch({ type: "START" });

    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
      
      if (!resposta.ok) {
        throw new Error("Pokemon não encontrado");
      }

      const dados = await resposta.json();

      dispatch({ type: "SUCCESS", payload: dados });

    } catch (erro) {
      dispatch({ type: "ERROR", payload: erro.message });
    }

  };

  return (
    <PokemonContext.Provider value={{ state, buscarPokemon }}>
      {children}
    </PokemonContext.Provider>

  );


}