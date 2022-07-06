import Router from "./rotas/Rotas";
// import { HomePage } from "./pages/HomePage/HomePage";
// import { PokeDexDetails } from "./pages/PokedexDetails/PokedexDetails";
// import { PokedexPage } from "./pages/PokedexPage/PokedexPage";
// import { getPokemonDetails, getPokemons } from "./services/requests";

function App() {

  const id = 1

  return (
    <div >
      <Router/>
      {/* <HomePage/>
      <hr />
      <PokedexPage/>
      <hr />
      <PokeDexDetails/>
      
      <h1>Pokedex Requisições</h1>
      <button onClick={getPokemons}>getPokemons</button>
      <button onClick={() => {getPokemonDetails(id)}}>getPokemonDetails</button> */}

    </div>
  );
}

export default App;
