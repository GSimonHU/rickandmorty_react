import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
    characters: [],
    character: null,
    error: null,
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
                payload: err,
            });
        }
    }

    async function getCharacter(id) {
        try {
            const res = await axios.get(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            dispatch({
                type: "GET_CHARACTER",
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: "CHARACTER_ERROR",
                payload: err,
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                character: state.character,
                characters: state.characters,
                error: state.error,
                getCharacters,
                getCharacter,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
