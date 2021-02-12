import React from "react";

const CharacterDetailCard = ({ character }) => {
    let content = <div>Loading</div>;
    if (character !== null) {
        content = (
            <>
                <img src={character.image} alt="" />
                <div>
                    <div>{character.name}</div>
                    <div>{character.gender}</div>
                    <div>{character.location.name}</div>
                    <div>{character.species}</div>
                    <div>{character.status}</div>
                </div>
            </>
        );
    }

    return content;
};

export default CharacterDetailCard;
