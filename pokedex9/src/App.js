import { useEffect } from "react";
import Router from "./rotas/Rotas";
import { getPokemonImages } from "./services/requests";

function App() {

  const id = 6

  useEffect(() => {getPokemonImages(id)}, [])

  return (
    <div >
      <Router/>
    </div>
  );
}

export default App;
