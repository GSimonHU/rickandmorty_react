import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
    characters: [],
    error: null,
    loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getCharacters() {
        try {
            const res = await axios.get(
                "https://rickandmortyapi.com/api/character"
            );
            dispatch({
                type: "GET_CHARACTERS",
                payload: res.data.results,
            });
        } catch (err) {
            dispatch({
                type: "CHARACTERS_ERROR",
                payload: err.response.data.error,
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                characters: state.characters,
                error: state.error,
                loading: state.loading,
                getCharacters,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
