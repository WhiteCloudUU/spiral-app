import React from 'react';
import { connect } from 'react-redux';
import FastenerListItem from './FastenerListItem';
import selectFasteners from '../utils/selectFasteners';

export const FastenerList = (props) => (
  <div className="list__box">
    <div className="list__title">
      <div>
        Fastener 
      </div>

      <div>
        Description / Quantity
      </div>
    </div>

    <div>
      {
        props.fasteners.length === 0 ? 
        (
          <div className="list__message">
            <span>No fasteners</span>
          </div>
        ) : (
          props.fasteners.map((fastener) => {
            return <FastenerListItem key={fastener.id} fastener={fastener} />;
          })
        )
      }
    </div>
  </div>

);

const mapStateToProps = (state) => {
  return {
    fasteners: selectFasteners([...state.fasteners, ...state.pins], state.filters)
  };
};

export default connect(mapStateToProps)(FastenerList);
