import React from 'react';
import { connect } from 'react-redux';
import FastenerForm from './FastenerForm';
import { startEditFastener, startRemoveFastener } from '../actions/fasteners';

export class EditFastenerPage extends React.Component {
    onSubmit = (fastener) => {
        this.props.startEditFastener(this.props.fastener.id, fastener);
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
                        this.props.startRemoveFastener(this.props.fastener.id);
                        this.props.history.push('/');
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
    startRemoveFastener: (id) => dispatch(startRemoveFastener(id)),
    startEditFastener: (id, fastener) => dispatch(startEditFastener(id, fastener))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFastenerPage);
