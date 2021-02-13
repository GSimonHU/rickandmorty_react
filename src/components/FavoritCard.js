import React from "react";
import { Link } from "react-router-dom";

const FavoritCard = ({ character, removeFavorite }) => {
    return (
        <div className="characterCard">
            <img src={character.image} alt="" />
            <h1>{character.name}</h1>
            <Link to={`/characters/${character.id}`}>Click for more info</Link>
            <button onClick={() => removeFavorite(character.id)}>
                Remove from Favorites
            </button>
        </div>
    );
};

export default FavoritCard;
