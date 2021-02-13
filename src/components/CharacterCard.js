import { Link } from "react-router-dom";
import CharacterCardElement from "../elements/CharacterCardElement";
import FavoriteBtn from "../elements/FavoriteBtn";

const CharacterCard = ({ character, addToFavorites }) => {
    return (
        <CharacterCardElement>
            <img src={character.image} alt="" className="characterImage" />
            <h1>{character.name}</h1>
            <Link to={`/characters/${character.id}`}>Click for more info</Link>
            <FavoriteBtn onClick={() => addToFavorites(character)}>
                Add to Favorites
            </FavoriteBtn>
        </CharacterCardElement>
    );
};

export default CharacterCard;
