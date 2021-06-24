import React from 'react';
import { connect } from 'react-redux';
import { setFastenerProjectFilter } from '../actions/filters';

class FastenerProjectSelection extends React.Component {

    state = {
        project: "",
    }

    onFastenerProjectChange = (e) => {
        const project = e.target.value;
        this.setState(() => ({ project }));
        this.props.setFastenerProjectFilter(project);
    };

    render() {
        return (

            <div className="form__box">
                <p className="form__title">Project</p>
                <select
                    className="select"
                    value={this.state.project}
                    onChange={this.onFastenerProjectChange}
                >
                    <option value='' defaultValue disabled>
                        --- Select Project ---
                    </option>
                    <option value="F01A">F01A</option>
                    <option value="F01G">F01G</option>
                </select>

                <p> --- Or --- </p>

                <input
                    className="text-input"
                    type="text"
                    placeholder="Add a new project"
                    value={this.state.project}
                    onChange={this.onFastenerProjectChange}
                />
            </div>
        )

    }
}


const mapDispatchToProps = (dispatch) => ({
    setFastenerProjectFilter: (fastenerProject) => dispatch(setFastenerProjectFilter(fastenerProject)),
});

export default connect(undefined, mapDispatchToProps)(FastenerProjectSelection);