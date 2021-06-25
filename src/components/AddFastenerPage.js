import React from 'react';
import { connect } from 'react-redux';
import FastenerProjects from './FastenerProjects';
import FastenerForm from './FastenerForm';
import FastenerFormPin from './FastenerFormPin';
import { startAddFastener } from '../actions/fasteners';
import { startAddPin } from '../actions/pins';

export class AddFastenerPage extends React.Component {
    state = {
        type: ""
    }

    onTypeChange = (e) => {
        const type = e.target.value;
        this.setState(() => ({ type }));
    }
    
    onSubmit = (fastener) => {
        if (this.state.type == "screw") {
            this.props.startAddFastener(fastener);
            this.props.history.push('/');
        } 
        else if (this.state.type == "pin") {
            this.props.startAddPin(fastener);
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="container">

                <FastenerProjects />

                <div className="form__box">
                    <p className="form__title">Type</p>
                    <select
                        className="select"
                        value={this.state.type}
                        onChange={this.onTypeChange}
                    >
                        <option value='' defaultValue disabled>
                            --- Select Fastener Type ---
                        </option>
                        <option value="screw">Screw</option>
                        <option value="pin">Pin</option>
                    </select>

                </div>

                {
                    this.state.type === "screw" &&
                    (
                        <FastenerForm
                            onSubmit={this.onSubmit}
                        />
                    )
                }

                {
                    this.state.type === "pin" &&
                    (
                        <FastenerFormPin
                            onSubmit={this.onSubmit}
                        />
                    )
                }

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        startAddFastener: (fastener) => dispatch(startAddFastener(fastener)),
        startAddPin: (pin) => dispatch(startAddPin(pin))
    }
)

export default connect(undefined, mapDispatchToProps)(AddFastenerPage);
