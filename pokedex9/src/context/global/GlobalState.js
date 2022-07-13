import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = ({ children }) => {

    const [pokedex, setPokedex] = useState([]);

    const state = { pokedex }
    const setters = { setPokedex }
    const request = {}

    return (
        <>
            <GlobalStateContext.Provider value={{ state, setters, request }}>
                {children}
            </GlobalStateContext.Provider>
        </>
    )
}