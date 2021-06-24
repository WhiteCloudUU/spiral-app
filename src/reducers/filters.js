import moment from 'moment'

/* Filter reducer */
const filterDefaultState = {
    fastenerType: '',
    sortBy: '',
};

export default (state = filterDefaultState, action) => {
    switch (action.type) {
        case "SET_FASTENER_TYPE_FILTER":
            return {
                ...state,
                fastenerType: action.fastenerType
            }

        case "SET_FASTENER_PROJECT_FILTER":
            return {
                ...state,
                fastenerProject: action.fastenerProject
            }

        case "SET_SORT_BY":
            return {
                ...state,
                sortBy: action.sortBy
            }

        // case "SORT_BY_SIZE":
        //     return {
        //         ...state,
        //         sortBy: 'size'
        //     }
        // case "SORT_BY_APPEARANCE":
        //     return {
        //         ...state,
        //         sortBy: 'appearance'
        //     }
        // case "SET_START_MATERIAL":
        //     return {
        //         ...state,
        //         sortBy: 'material'
        //     }
        default:
            return state;
    }
};
