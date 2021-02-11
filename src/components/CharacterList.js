import { useState } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
    const [characters, setCharacters] = useState([
        {
            id: 1,
            name: "Rick Sanchez",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            url: "https://rickandmortyapi.com/api/character/1",
        },
        {
            id: 2,
            name: "Morty Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            url: "https://rickandmortyapi.com/api/character/1",
        },
    ]);

    return (
        <>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </>
    );
};

export default CharacterList;