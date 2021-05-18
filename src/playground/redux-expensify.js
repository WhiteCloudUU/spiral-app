import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

/* Action generators */
const addExpense = (
    {
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    } = {}
) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    };
};

const removeExpense = (id) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    };
};

const editExpense = (id, updates = {}) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
}

const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT",
        text
    }
}

const sortByDate = () => {
    return {
        type: "SORT_BY_DATE",
    }
}

const sortByAmount = () => {
    return {
        type: "SORT_BY_AMOUNT",
    }
}

const setStartDate = (startDate) => {
    return {
        type: "SET_START_DATE",
        startDate
    }
}

const setEndDate = (endDate) => {
    return {
        type: "SET_END_DATE",
        endDate
    }
}

/* Expense reducer */
const expenseDefaultState = [];
const expenseReducer = (state = expenseDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense
                }
            });
        default:
            return state;
    }
};

/* Filter reducer */
const filterDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

/* Select redux store */
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;// The most recent expense goes top
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1; // The larger expense goes top
        }
    })
}

/* Create redux store and subscribe */
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Test cases
const expenseOne = store.dispatch(addExpense({ description: "coffee", amount: 525, createdAt: 150}));
const expenseTwo = store.dispatch(addExpense({ description: "Rent", amount: 1300, createdAt: 200}));

// store.dispatch(removeExpense(expenseOne.expense.id));
// store.dispatch(editExpense(expenseTwo.expense.id, { description: "Rent" }));

// store.dispatch(setTextFilter("ffee"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));