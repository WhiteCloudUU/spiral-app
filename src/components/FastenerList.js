import React from 'react';
import { connect } from 'react-redux';
import FastenerListItem from './FastenerListItem';

export const FastenerList = (props) => (
  <div>
    {
      props.fasteners.length === 0 ? (
        <p>No Fasteners</p>
      ) : (
          props.fasteners.map((fastener) => {
            return <FastenerListItem key={fastener.id} fastener={fastener} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    fasteners: state.fasteners
  };
};

export default connect(mapStateToProps)(FastenerList);
