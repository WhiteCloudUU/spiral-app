import React from 'react';
import { connect } from 'react-redux';
import FastenerForm from './FastenerForm';
import { editFastener, removeFastener } from '../actions/fasteners';

export class EditFastenerPage extends React.Component {
    onSubmit = (fastener) => {
        this.props.editFastener(this.props.fastener.id, fastener);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Edit Fastener</h1>
                <FastenerForm
                    onSubmit={this.onSubmit}
                    fastener={this.props.fastener}
                />
                <button
                    onClick={() => {
                        props.removeExpense(props.expense.id);
                        props.history.push('/');
                    }}
                >
                    Remove Fastener
                </button>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    fastener: state.fasteners.find((fastener) => (fastener.id === props.match.params.id))
})

const mapDispatchToProps = (dispatch) => ({
    removeFastener: (id) => dispatch(removeFastener(id)),
    editFastener: (id, fastener) => dispatch(editFastener(id, fastener))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFastenerPage);
