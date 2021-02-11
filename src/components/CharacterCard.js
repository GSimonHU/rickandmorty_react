const CharacterCard = ({ character }) => {
    return (
        <>
            <p>{character.name}</p>
            <img src={character.image} alt="" />
            <a href={character.url}>Click for more info</a>
        </>
    );
};

export default CharacterCard;
