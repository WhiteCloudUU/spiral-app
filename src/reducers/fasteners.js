/* Fastener reducer */
const fastenerDefaultState = [];

export default (state = fastenerDefaultState, action) => {
    switch (action.type) {
        case "ADD_FASTENER":
            return [...state, action.fastener];

        case "REMOVE_FASTENER":
            return state.filter(({ id }) => id !== action.id);

        case "EDIT_FASTENER":
            return state.map((fastener) => {
                if (fastener.id === action.id) {
                    return {
                        ...fastener,
                        ...action.updates
                    };
                } else {
                    return fastener
                }
            });

        case "SET_FASTENERS":
            return action.fasteners
            
        default:
            return state;
    }
};