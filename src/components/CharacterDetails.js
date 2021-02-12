import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useParams } from "react-router-dom";
import CharacterDetailCard from "../components/CharacterDetailCard";

const CharacterDetails = () => {
    const { character, getCharacter } = useContext(GlobalContext);
    const { id } = useParams();
    useEffect(() => {
        getCharacter(id);
    }, []);

    return (
        <>
            <CharacterDetailCard character={character} />
        </>
    );
};

export default CharacterDetails;
