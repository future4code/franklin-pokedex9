import { useEffect } from "react";
import Router from "./rotas/Rotas";
import { getPokemonImages } from "./services/requests";
import { ContextPokemon } from "./context/ContextPokemon";
import './App.css';

function App() {


  const id = 6

  useEffect(() => {getPokemonImages(id)}, [])


  const poke = {
    nome: "bulbassaur",
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
  }

  return (
    <div >
      <ContextPokemon.Provider value={poke}>
        <Router />
      </ContextPokemon.Provider>
    </div>
  );
}

export default App;
