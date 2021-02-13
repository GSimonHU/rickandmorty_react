import { useHttp } from "../custom_hooks/http";

import CharacterCard from "./CharacterCard";
import "../style/Characters.css";
const CharacterList = () => {
    let data = useHttp("https://rickandmortyapi.com/api/character", []);
    let characters = null;
    if (data) {
        characters = data.results;
    }

    let content = <p>Loading Characters...</p>;

    if (characters) {
        content = (
            <div className="cardContainer">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        );
    }
    return content;
};

export default CharacterList;
