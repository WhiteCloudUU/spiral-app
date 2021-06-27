import React from 'react';
import { connect } from 'react-redux';
import FastenerForm from './FastenerForm';
import FastenerFormPin from './FastenerFormPin';
import { startEditFastener, startRemoveFastener } from '../actions/fasteners';
import { startEditPin, startRemovePin } from '../actions/pins';

export class EditFastenerPage extends React.Component {
    
    onSubmit = (fastener) => {
        if (this.props.fastener.type == "screw") {
            this.props.startEditFastener(this.props.fastener.id, fastener);
            
        } else if (this.props.fastener.type == "pin") {
            this.props.startEditPin(this.props.fastener.id, fastener);
        }

        this.props.history.push('/')
    }

    onRemoveFastener = () => {
        if (this.props.fastener.type == "screw") {
            this.props.startRemoveFastener(this.props.fastener.id);
            
        } else if (this.props.fastener.type == "pin") {
            this.props.startRemovePin(this.props.fastener.id);
        }
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">

                {
                    this.props.fastener.type === "screw" &&
                    (
                        <FastenerForm
                            fastener={this.props.fastener}
                            onSubmit={this.onSubmit}
                            onRemoveFastener={this.onRemoveFastener}
                        />
                    )
                }
                {
                    this.props.fastener.type === "pin" &&
                    (
                        <FastenerFormPin
                            fastener={this.props.fastener}
                            onSubmit={this.onSubmit}
                            onRemoveFastener={this.onRemoveFastener}
                        />
                    )
                }

            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    fastener: [...state.fasteners, ...state.pins]
                .find((fastener) => (fastener.id === props.match.params.id))
})

const mapDispatchToProps = (dispatch) => ({
    startRemoveFastener: (id) => dispatch(startRemoveFastener(id)),
    startEditFastener: (id, fastener) => dispatch(startEditFastener(id, fastener)),

    startRemovePin: (id) => dispatch(startRemovePin(id)),
    startEditPin: (id, pin) => dispatch(startEditPin(id, pin))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFastenerPage);
