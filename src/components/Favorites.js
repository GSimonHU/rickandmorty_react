import React from "react";
import FavoritCard from "./FavoritCard";
import "../style/Characters.css";

const Favorites = ({ favorites, removeFavorite }) => {
    let content = null;

    if (favorites.length === 0) {
        content = <div>No favorit characters added yet</div>;
    } else {
        content = (
            <div className="cardContainer">
                {favorites.map((character) => (
                    <FavoritCard
                        key={character.id}
                        character={character}
                        removeFavorite={removeFavorite}
                    />
                ))}
            </div>
        );
    }

    return content;
};

export default Favorites;
