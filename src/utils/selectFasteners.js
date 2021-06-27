export default (fasteners, { fastenerType, fastenerProject, sortBy }) => {
    return fasteners.filter((fastener) => {

        const typeMatch = fastenerType ? fastener.type === fastenerType : true;
        const projectMatch = fastenerProject ? fastener.project === fastenerProject : true;

        return typeMatch && projectMatch;

    }).sort((a, b) => {
        if (sortBy === "size") {
            return a.size < b.size ? -1 : 1; // Small fastener goes first
        } else if (sortBy === "material") {
            return a.material < b.material ? -1 : 1; // Alphabetical order
        } else if (sortBy === "appearance") {
            return a.headType < b.headType ? -1 : 1; // Alphabetical order
        }
    });
};