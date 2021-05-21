import React from 'react';
import { Link } from 'react-router-dom';
import abbreviateFastener from '../utils/abbreviateFastener';

const FastenerListItem = (props) => {
    const fastenr = abbreviateFastener(props.fastener, 'Screw');
    const { id, thruHolePart, threadedHolePart, quantity } = props.fastener;
    return (
        <div>
            <Link to={`/edit/${id}`}>
                {fastenr}
            </Link>
            <p>{thruHolePart} - {threadedHolePart}</p>
            <p>{quantity}</p>
        
        </div>
    )
};

export default FastenerListItem;