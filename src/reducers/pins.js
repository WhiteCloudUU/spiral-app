/* pin reducer */
const pinDefaultState = [];

export default (state = pinDefaultState, action) => {
    switch (action.type) {
        case "ADD_PIN":
            return [...state, action.pin];

        case "REMOVE_PIN":
            return state.filter(({ id }) => id !== action.id);

        case "EDIT_PIN":
            return state.map((pin) => {
                if (pin.id === action.id) {
                    return {
                        ...pin,
                        ...action.updates
                    };
                } else {
                    return pin
                }
            });

        case "SET_PINS":
            return action.pins
            
        default:
            return state;
    }
};