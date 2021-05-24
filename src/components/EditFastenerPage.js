import React from 'react';
import { connect } from 'react-redux';
import FastenerForm from './FastenerForm';
import FastenerInfo from './FastenerInfo';
import { startEditFastener, startRemoveFastener } from '../actions/fasteners';

export class EditFastenerPage extends React.Component {
    onSubmit = (fastener) => {
        this.props.startEditFastener(this.props.fastener.id, fastener);
        this.props.history.push('/');
    }
    onRemoveFastener = () => {
        this.props.startRemoveFastener(this.props.fastener.id);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">

                <FastenerForm
                    onSubmit={this.onSubmit}
                    fastener={this.props.fastener}
                    onRemoveFastener={this.onRemoveFastener}
                />

                <FastenerInfo />

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
