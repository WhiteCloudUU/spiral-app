import React from 'react';
import { Link } from 'react-router-dom';
import abbreviateFastener from '../utils/abbreviateFastener';

const FastenerListItem = (props) => {
    const fastener = abbreviateFastener(props.fastener);
    const { id, thruHolePart, threadedHolePart, quantity } = props.fastener;
    return (
        <Link className="list__item" to={`/edit/${id}`}>
            <div className="list-item__title">
                <p>{fastener}</p>
            </div>

            <div className="list-item__box">
                <div>
                    <p>{thruHolePart}</p>
                    <p>{threadedHolePart}</p>
                </div>

                <div>
                    <p>{quantity}</p>
                </div>
            </div>
            
        </Link>
    )
};

export default FastenerListItem;