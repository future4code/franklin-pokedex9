import { HomePage } from "./pages/HomePage/HomePage";
import { PokeDexDetails } from "./pages/PokedexDetails/PokedexDetails";
import { PokedexPage } from "./pages/PokedexPage/PokedexPage";


function App() {
  return (
    <div >
      <HomePage/>
      <hr />
      <PokedexPage/>
      <hr />
      <PokeDexDetails/>
    </div>
  );
}

export default App;
