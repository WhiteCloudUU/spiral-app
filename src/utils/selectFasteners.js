export default (fasteners, { fastenerType, sortBy }) => {
    return fasteners.filter((fastener) => {

        const typeMatch = fastenerType ? fastener.type === fastenerType : true
    
        return typeMatch;

    }).sort((a, b) => {
        if (sortBy === "size") {
            return a.size < b.size ? -1 : 1; // Small fastener goes first
        } else if (sortBy === "material") {
            return a.material < b.material ? -1 : 1; 
        } else if (sortBy === "appearance") {
            return a.headType < b.headType ? -1 : 1; 
        }
    });
};