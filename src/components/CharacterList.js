import { useHttp } from "../custom_hooks/http";

import CharacterCard from "./CharacterCard";
import "../style/Characters.css";

import CardContainer from "../elements/CardContainer";

const CharacterList = ({ addToFavorites }) => {
    let data = useHttp("https://rickandmortyapi.com/api/character", []);
    let characters = null;
    if (data) {
        characters = data.results;
    }

    let content = <p>Loading Characters...</p>;

    if (characters) {
        content = (
            <CardContainer>
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        addToFavorites={addToFavorites}
                    />
                ))}
            </CardContainer>
        );
    }
    return content;
};

export default CharacterList;
