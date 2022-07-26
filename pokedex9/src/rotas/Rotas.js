import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { PokeDexDetails } from "../pages/PokedexDetails/PokedexDetails";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/pokedex/details/:id" element={<PokeDexDetails />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;