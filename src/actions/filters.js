
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



export const setFastenerProjectFilter = (fastenerProject = "") => (
    {
        type: "SET_FASTENER_PROJECT_FILTER",
        
        fastenerProject
    }
)
