import React from "react";
import FavoritCard from "./FavoritCard";

import CardContainer from "../elements/CardContainer";

import "../style/Characters.css";

const Favorites = ({ favorites, removeFavorite }) => {
    let content = null;

    if (favorites.length === 0) {
        content = <div>No favorite characters added yet</div>;
    } else {
        content = (
            <CardContainer>
                {favorites.map((character) => (
                    <FavoritCard
                        key={character.id}
                        character={character}
                        removeFavorite={removeFavorite}
                    />
                ))}
            </CardContainer>
        );
    }

    return content;
};

export default Favorites;
