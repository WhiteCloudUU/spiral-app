import React from 'react';
import { Link } from 'react-router-dom';
import abbreviateFastener from '../utils/abbreviateFastener';

const FastenerListItem = (props) => {
    const fastener = abbreviateFastener(props.fastener, 'Screw');
    const { id, thruHolePart, threadedHolePart, quantity } = props.fastener;
    return (
        <Link className="list__item" to={`/edit/${id}`}>
            <div className="list-item__title">
                <h3>{fastener}</h3>
            </div>

            <div>
                <p>{thruHolePart}</p>
                <p>{threadedHolePart}</p>
            </div>

            <div>
                <p>{quantity}</p>
            </div>

        </Link>
    )
};

export default FastenerListItem;