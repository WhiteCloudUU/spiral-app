import database from '../firebase/firebase';
import uuid from 'uuid';

// Add Pin
export const addPin = (pin) => {
    return {
        type: 'ADD_PIN',
        pin
    }
}

export const startAddPin = (pinData = {}) => {
    const {
        type = 'pin',
        size = 0,
        length = 0,
        partA = '',
        partB = '',
        quantity = 1
    } = pinData;

    const pin = { 
        type,
        size, length, 
        partA, partB,
        quantity
    };

    return (dispatch) => {
        database.ref(`pins`).push(pin)
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
    return (dispatch) => {
        database.ref(`pins/${id}`).update(updates)
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
    return (dispatch) => {
        database.ref(`pins/${id}`).remove()
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
    return (dispatch) => {
        return database.ref(`pins`).once('value')
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
