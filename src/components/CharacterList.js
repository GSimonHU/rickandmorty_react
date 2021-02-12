import { useHttp } from "../custom_hooks/http";

import CharacterCard from "./CharacterCard";
import "../style/Characters.css";
const CharacterList = () => {
    const [isLoading, data] = useHttp(
        "https://rickandmortyapi.com/api/character",
        []
    );

    let characters = null;
    if (data) {
        characters = data.results;
    }

    let content = <div>Data is loading</div>;

    if (!isLoading && characters) {
        content = (
            <div className="cardContainer">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        );
    } else if (!isLoading && !characters) {
        content = <p>Failed to fetch characters.</p>;
    }
    return content;
};

export default CharacterList;
