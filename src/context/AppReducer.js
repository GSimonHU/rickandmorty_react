export default (state, action) => {
    switch (action.type) {
        case "GET_CHARACTERS":
            return {
                ...state,
                characters: action.payload,
            };
        case "GET_CHARACTER":
            return {
                ...state,
                character: action.payload,
            };
        case "CHARACTER_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case "CHARACTERS_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
