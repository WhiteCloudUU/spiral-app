import React from 'react';
import { connect } from 'react-redux';
import FastenerForm from './FastenerForm';
import { addFastener } from '../actions/fasteners';

export class AddFastenerPage extends React.Component {
    onSubmit = (fastener) => {
        this.props.addFastener(fastener);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Add Fastener</h1>
                <FastenerForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )  
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        addFastener: (expense) => dispatch(addFastener(expense))
    }
)

export default connect(undefined, mapDispatchToProps)(AddFastenerPage);
