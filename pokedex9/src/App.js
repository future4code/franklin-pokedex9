import { useEffect } from "react";
import Router from "./rotas/Rotas";
import { getPokemonImages } from "./services/requests";
// import { ContextPokemon } from "./context/ContextPokemon";
import './App.css';
import { GlobalState } from "./context/global/GlobalState";

function App() {


  const id = 6

  useEffect(() => {getPokemonImages(id)}, [])

  return (
    <div >
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
