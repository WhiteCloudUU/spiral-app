import React from 'react';
import { connect } from 'react-redux';
import FastenerForm from './FastenerForm';
import { startAddFastener } from '../actions/fasteners';

export class AddFastenerPage extends React.Component {
    onSubmit = (fastener) => {
        this.props.startAddFastener(fastener);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                
                <FastenerForm 
                    onSubmit={this.onSubmit}
                />
                
            </div>
        )  
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        startAddFastener: (expense) => dispatch(startAddFastener(expense))
    }
)

export default connect(undefined, mapDispatchToProps)(AddFastenerPage);
