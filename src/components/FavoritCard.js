import React from "react";
import { Link } from "react-router-dom";
import CharacterCardElement from "../elements/CharacterCardElement";
import FavoriteBtn from "../elements/FavoriteBtn";

const FavoritCard = ({ character, removeFavorite }) => {
    return (
        <CharacterCardElement>
            <img src={character.image} alt="" className="characterImage" />
            <h1>{character.name}</h1>
            <Link to={`/characters/${character.id}`}>Click for more info</Link>
            <FavoriteBtn onClick={() => removeFavorite(character.id)}>
                Remove from Favorites
            </FavoriteBtn>
        </CharacterCardElement>
    );
};

export default FavoritCard;
