import CardElement from "../elements/CardElement";

const CharacterCard = ({ character }) => {
    return (
        <div className="characterCard">
            <img src={character.image} alt="" />
            <h1>{character.name}</h1>
            <a href={character.url}>Click for more info</a>
        </div>
    );
};

export default CharacterCard;
