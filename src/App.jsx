import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import{ PokemonProvider } from './contexts/PokemonContext';
import SearchBar from './components/SearchBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <PokemonProvider>
      <h1>Pokedex React</h1>
      <SearchBar />
    </PokemonProvider>
      
  )
}

export default App
