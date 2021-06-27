import React from 'react';
import { connect } from 'react-redux';
import { 
    startAddProject,
    startRemoveProject,
    startEditProject
    } 
    from '../actions/projects';
import { setFastenerProjectFilter } from '../actions/filters';

import { startRemoveFastener, startEditFastener } from '../actions/fasteners';

class FastenerProjectSelection extends React.Component {

    state = {
        project: '',
        projectToEdit: '',
        selectedProject: this.props.fastenerProject,
        error: ''
    }

    onSelectProject = (e) => {
        const selectedProject = e.target.value;
        this.setState(() => ({ selectedProject }));
        this.props.setFastenerProjectFilter(selectedProject);

        // Not necessary to set selectedProject input
        // this.setState(() => ({ projectToEdit: selectedProject }));
    };

    onProjectChange = (e) => {
        const project = e.target.value;
        
        this.setState(() => ({ project }));
    }

    onProjectToEditChange = (e) => {
        const projectToEdit = e.target.value;
        this.setState(() => ({ projectToEdit }));
    }

    onAddProject = () => {
        const foundProject = this.props.projects.find((project) => 
            project.name.trim().toLowerCase() 
                === 
            this.state.project.trim().toLowerCase()
        );  
        
        if (!this.state.project) {
            this.setState(() => ({ error: "Please enter a valid project." })); 
        }
        else if (foundProject) {
            this.setState(() => ({ error: "Existing project" })); 
        }
        else {
            const newProject = {
                name: this.state.project
            };
    
            this.props.startAddProject(newProject);
            this.props.setFastenerProjectFilter(newProject.name);
    
            this.setState(() => ({ project: '' }));
            this.setState(() => ({ selectedProject: newProject.name }));
            this.setState(() => ({ error: '' }));
        }
    }

    onEditProject = () => {
        if (this.state.projectToEdit) {
            const projectToBeEditted = this.props.fastenerProject;

            const { id } = this.props.projects
                    .find((project) => (project.name === projectToBeEditted));

            const newProject = {
                name: this.state.projectToEdit
            };

            this.props.setFastenerProjectFilter(newProject.name);
            this.props.startEditProject(id, newProject);

            this.setState(() => ({ projectToEdit: ''}));
            this.setState(() => ({ selectedProject: newProject.name }));

            // The fasteners should be also affected (editted)
            this.props.fasteners.forEach((fastener) => {
                
                if (fastener.project === projectToBeEditted) {
                    
                    this.props.startEditFastener(fastener.id, { project: newProject.name });
                }
            })

        }
    }

    onRemoveProject = () => {
        if (this.state.selectedProject) {
            const projectToBeRemoved = this.props.fastenerProject;

            const { id } = this.props.projects
                    .find((project) => (project.name === projectToBeRemoved));

            this.props.startRemoveProject(id);
            this.props.setFastenerProjectFilter('');

            this.setState(() => ({ projectToEdit: '' }));
            this.setState(() => ({ selectedProject: '' }));

            // The fasteners should be also affected (removed)
            this.props.fasteners.forEach((fastener) => {
                if (fastener.project === projectToBeRemoved) {
                    this.props.startRemoveFastener(fastener.id);
                }
            })
        }
    }

    render() {
        return (

            <div className="form__box">
                <p className="form__title">Current project</p>

                <select
                    className="select"
                    value={this.state.selectedProject}
                    onChange={this.onSelectProject}
                >
                    <option value="" disabled defaultValue>
                        --- Select Project ---
                    </option>
                    {
                        this.props.projects.map((project) => {
                          return (
                            <option
                              value={project.name}
                              key={project.id}>
                              {project.name}
                            </option>
                          )
                        })
                    }
                </select>

                <p className="form__title"> --- Or --- </p>
                
                {
                    this.state.error &&
                    <p className="form__error">{this.state.error}</p>
                }
                
                {
                    this.props.from === 'AddFastenerPage' ?
                    (
                        <input
                            className="text-input"
                            type="text"
                            placeholder="Add a new project"
                            value={this.state.project}
                            onChange={this.onProjectChange}
                        />
                    ) :
                    (
                        <input
                            className="text-input"
                            type="text"
                            placeholder="Edit an existing project"
                            value={this.state.projectToEdit}
                            onChange={this.onProjectToEditChange}
                        />
                    )
                }
                

                {
                    this.props.from === 'AddFastenerPage' ? 
                    ( 
                        <div className="single-button">
                            <button
                                className="button"
                                onClick={this.onAddProject}
                            >
                                Add Project
                            </button>
                        </div>
                    ) :
                    (
                        <div className="double-button">
                            <div>
                                <button
                                    className="button"
                                    onClick={this.onRemoveProject}
                                >
                                    Remove Project
                                </button>
                            </div>
            
                            <div>
                                <button 
                                    className="button" 
                                    onClick={this.onEditProject}
                                >
                                    Edit Project
                                </button>
                            </div>
                        </div>
                    )
                }              
                
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    
    return ({
        fasteners: [...state.fasteners, ...state.pins],
        projects: state.projects,
        fastenerProject: state.filters.fastenerProject
    })
}

const mapDispatchToProps = (dispatch) => ({
    startAddProject: (project) => dispatch(startAddProject(project)),
    startRemoveProject: (id) => dispatch(startRemoveProject(id)),
    startEditProject: (id, updates) => dispatch(startEditProject(id, updates)),

    setFastenerProjectFilter: (fastenerProject) => dispatch(setFastenerProjectFilter(fastenerProject)),
    
    startRemoveFastener: (id) => dispatch(startRemoveFastener(id)),
    startEditFastener: (id, fastener) => dispatch(startEditFastener(id, fastener))
});

export default connect(mapStateToProps, mapDispatchToProps)(FastenerProjectSelection);