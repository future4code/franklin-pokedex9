import { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {

    const [pokedex, setPokedex] = useState([]);

    const state = { pokedex }
    const setters = { setPokedex }
    const request = {}

    return (
        <>
            <GlobalStateContext.Provider value={{ state, setters, request }}>
                {props.children}
            </GlobalStateContext.Provider>
        </>
    )
}