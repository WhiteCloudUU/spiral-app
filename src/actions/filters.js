// SET FILTER
export const setFastenerTypeFilter = (fastenerType = "") => (
    {
        type: "SET_FASTENER_TYPE_FILTER",
        fastenerType
    }
)

// SORT BY
export const setSortBy = (sortBy = "") => (
    {
        type: "SET_SORT_BY",
        sortBy
    }
);


