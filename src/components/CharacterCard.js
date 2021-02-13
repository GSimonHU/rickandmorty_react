import { Link } from "react-router-dom";

const CharacterCard = ({ character, addToFavorites }) => {
    return (
        <div className="characterCard">
            <img src={character.image} alt="" />
            <h1>{character.name}</h1>
            <Link to={`/characters/${character.id}`}>Click for more info</Link>
            <button onClick={() => addToFavorites(character)}>
                Add to Favorites
            </button>
        </div>
    );
};

export default CharacterCard;
