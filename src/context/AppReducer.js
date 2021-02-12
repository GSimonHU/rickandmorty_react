export default (state, action) => {
    switch (action.type) {
        case "GET_CHARACTERS":
            return {
                ...state,
                loading: false,
                characters: action.payload,
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
