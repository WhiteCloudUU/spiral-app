import React from 'react';
import { connect } from 'react-redux';
import { startAddProject } from '../actions/projects';
import { setFastenerProjectFilter } from '../actions/filters';

class FastenerProjectSelection extends React.Component {

    state = {
        project: "",
        selectedProject: this.props.fastenerProject,
        error: ''
    }

    onSelectProject = (e) => {
        const selectedProject = e.target.value;
        this.setState(() => ({ selectedProject }));
        this.props.setFastenerProjectFilter(selectedProject);
    };

    onProjectChange = (e) => {
        const project = e.target.value;
        this.setState(() => ({ project }));
    }

    onAddProject = () => {
        const foundProject = this.props.projects.find((project) => 
            project.name.trim().toLowerCase() 
                === 
            this.state.project.trim().toLowerCase()
        );  

        if (foundProject) {
            this.setState(() => ({ error: "Existing project" })); 
        }
        else {
            const newProject = {
                name: this.state.project
            };
    
            this.props.startAddProject(newProject);
            this.props.setFastenerProjectFilter(newProject.name);
    
            this.setState(() => ({ project: "" }));
            this.setState(() => ({ selectedProject: newProject.name }));
        }
        
        
    }

    render() {
        return (

            <div className="form__box">
                <p className="form__title">Project</p>
                <select
                    className="select"
                    value={this.state.selectedProject}
                    onChange={this.onSelectProject}
                >
                    <option value="" defaultValue disabled>
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
                
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    className="text-input"
                    type="text"
                    placeholder="Add a new project"
                    value={this.state.project}
                    onChange={this.onProjectChange}
                />  

                <div className="single-button">
                    <button
                        className="button"
                        onClick={this.onAddProject}
                    >
                        Add project
                    </button>
                </div>

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    
    return ({
        projects: state.projects,
        fastenerProject: state.filters.fastenerProject
    })
}

const mapDispatchToProps = (dispatch) => ({
    startAddProject: (project) => dispatch(startAddProject(project)),
    setFastenerProjectFilter: (fastenerProject) => dispatch(setFastenerProjectFilter(fastenerProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FastenerProjectSelection);