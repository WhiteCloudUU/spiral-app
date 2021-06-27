import database from '../firebase/firebase';

// Add Project
export const addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    }
}

export const startAddProject = (projectData = {}) => {

    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const {
            name = "" // Default as empty string
        } = projectData;
    
        const project = { 
            name
        };
        database.ref(`users/${uid}/projects`).push(project)
            .then((ref) => {
                dispatch(addProject({
                        id: ref.key,
                        ...project
                    }));
            })
    }
}


// Edit Project
export const editProject = (id, updates) => {
    return {
        type: "EDIT_PROJECT",
        id,
        updates
    }
}

export const startEditProject = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/projects/${id}`).update(updates)
            .then(() => {
                dispatch(editProject(id, updates));
            })
    }
}

// Remove Project
export const removeProject = (id) => {
    return {
        type: "REMOVE_PROJECT",
        id
    }
}

export const startRemoveProject = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/projects/${id}`).remove()
            .then(() => {
                dispatch(removeProject(id));
            })
    }
}

// Set Projects
export const setProjects = (projects) => {
    return {
        type: "SET_PROJECTS",
        projects
    }
}

export const startSetProjects = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/projects`).once('value')
                .then((snapshot) => {
                    const projects = []

                    snapshot.forEach((childSnapshot) => {
                        projects.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        })
                    });

                    dispatch(setProjects(projects));
                })
    }
};
