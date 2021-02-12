import React, { useContext, useEffect } from "react";

// import { useHttp } from "../custom_hooks/http";
import { GlobalContext } from "../context/GlobalState";

import CharacterCard from "./CharacterCard";
import "../style/Characters.css";
const CharacterList = () => {
    const { characters, getCharacters } = useContext(GlobalContext);

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className="cardContainer">
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;
