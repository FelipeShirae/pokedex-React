import {useContext} from 'react'
import { PokemonContext } from './contexts/PokemonContext';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import{ PokemonProvider } from './contexts/PokemonContext';
import SearchBar from './components/SearchBar'
import PokemonCard from './components/PokemonCard';
import AppContent from './AppContent';

function App() {
  return (
    <PokemonProvider>
      <AppContent />
    </PokemonProvider>
  );
}

export default App
