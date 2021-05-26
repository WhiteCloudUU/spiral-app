
export default (fasteners, { fastenerType, sortBy }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; 
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1; // The most recent expense goes first
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1; // The larger expense goes first
        }
    });
};