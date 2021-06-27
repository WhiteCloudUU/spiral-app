import database from '../firebase/firebase';


// Add Pin
export const addPin = (pin) => {
    return {
        type: 'ADD_PIN',
        pin
    }
}

export const startAddPin = (pinData = {}) => {
    

    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const {
            type = 'pin',
            size = 0,
            length = 0,
            partA = '',
            partB = '',
            quantity = 1,
            project = ""
        } = pinData;
    
        const pin = { 
            type,
            size, length, 
            partA, partB,
            quantity,
            project
        };
        database.ref(`users/${uid}/pins`).push(pin)
            .then((ref) => {
                dispatch(addPin({
                        id: ref.key,
                        ...pin
                    }));
            })
    }
}


// Edit Pin
export const editPin = (id, updates) => {
    return {
        type: "EDIT_PIN",
        id,
        updates
    }
}

export const startEditPin = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/pins/${id}`).update(updates)
            .then(() => {
                dispatch(editPin(id, updates));
            })
    }
}


// Remove Pin
export const removePin = (id) => {
    return {
        type: "REMOVE_PIN",
        id
    }
}

export const startRemovePin = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/pins/${id}`).remove()
            .then(() => {
                dispatch(removePin(id));
            })
    }
}

// Set Pins
export const setPins = (pins) => {
    return {
        type: "SET_PINS",
        pins
    }
}

export const startSetPins = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/pins`).once('value')
                .then((snapshot) => {
                    const pins = []

                    snapshot.forEach((childSnapshot) => {
                        pins.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        })
                    });

                    dispatch(setPins(pins));
                })
    }
};
