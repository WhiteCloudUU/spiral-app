import database from '../firebase/firebase'

// Add Fastener
export const addFastener = (fastener) => {
    
    return {
        type: 'ADD_FASTENER',
        fastener
    }
}

export const startAddFastener = (fastenerData = {}) => {
    const {
        type = '',
        size = 0,
        length = 0,
        headType = '',
        driveType = '',
        material = '',
        thruHolePart = '',
        threadedHolePart = '',
        quantity = 1
    } = fastenerData;

    const fastener = { 
        type,
        size, length, 
        headType, driveType, 
        material, 
        thruHolePart, threadedHolePart,
        quantity
    };

    return (dispatch) => {
        database.ref(`fasteners`).push(fastener)
            .then((ref) => {
                dispatch(addFastener({
                        id: ref.key,
                        ...fastener
                    }));
            })
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

export const startEditFastener = (id, updates) => {
    return (dispatch) => {
        database.ref(`fasteners/${id}`).update(updates)
            .then(() => {
                dispatch(editFastener(id, updates));
            })
    }
}


// Remove Fastener
export const removeFastener = (id) => {
    return {
        type: "REMOVE_FASTENER",
        id
    }
}

export const startRemoveFastener = (id) => {
    return (dispatch) => {
        database.ref(`fasteners/${id}`).remove()
            .then(() => {
                dispatch(removeFastener(id));
            })
    }
}

// Set Fasteners
export const setFasteners = (fasteners) => {
    return {
        type: "SET_FASTENERS",
        fasteners
    }
}

export const startSetFasteners = () => {
    return (dispatch) => {
        return database.ref(`fasteners`).once('value')
                .then((snapshot) => {
                    const fasteners = []

                    snapshot.forEach((childSnapshot) => {
                        fasteners.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        })
                    });

                    dispatch(setFasteners(fasteners));
                })
    }
};
