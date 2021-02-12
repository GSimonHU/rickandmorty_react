import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    return (
        <div className="characterCard">
            <img src={character.image} alt="" />
            <h1>{character.name}</h1>
            <Link to={`/characters/${character.id}`}>Click for more info</Link>
        </div>
    );
};

export default CharacterCard;
