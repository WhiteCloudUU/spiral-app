import uuid from 'uuid';

// Add Fastener
export const addFastener = ({
    size = 0,
    length = 0,
    headType = '',
    driveType = '',
    material = '',
    thruHolePart = '',
    threadedHolePart = '',
} = {}) => {
    const fastener = { 
        id: uuid(),
        size, length, 
        headType, driveType, 
        material, 
        thruHolePart, threadedHolePart,
        quantity: 1
    };
    
    return {
        type: 'ADD_FASTENER',
        fastener
    }
}

// Edit Fastener
export const editFastener = (id, updates) => {
    return {
        type: "EDIT_FASTENER",
        id,
        updates
    }
}

// Remove Fastener
export const removeFastener = (id) => {
    return {
        type: "REMOVE_FASTENER",
        id
    }
}

// Set fasteners
export const setFasteners = (fasteners) => {
    return {
        type: "SET_FASTENERS",
        fasteners
    }
}


