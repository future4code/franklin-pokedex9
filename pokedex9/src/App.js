import { getPokemonDetails, getPokemons } from "./services/requests";

function App() {

  const id = 1

  return (
    <div >
      <h1>Pokedex</h1>
      <button onClick={getPokemons}>getPokemons</button>
      <button onClick={() => {getPokemonDetails(id)}}>getPokemonDetails</button>
    </div>
  );
}

export default App;
