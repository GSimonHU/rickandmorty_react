import { useParams } from "react-router-dom";
import { useHttp } from "../custom_hooks/http";

const CharacterDetails = () => {
    const { id } = useParams();
    let data = useHttp(`https://rickandmortyapi.com/api/character/${id}`, []);
    let character = null;
    if (data) {
        character = data;
    }

    let content = <p>Loading Character...</p>;

    if (character) {
        content = (
            <div>
                <img src={character.image} alt="" />
                <div>
                    <div>{character.name}</div>
                    <div>{character.gender}</div>
                    <div>{character.location.name}</div>
                    <div>{character.species}</div>
                    <div>{character.status}</div>
                </div>
            </div>
        );
    }
    return content;
};

export default CharacterDetails;
