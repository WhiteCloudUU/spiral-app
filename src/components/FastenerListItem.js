import React from 'react';
import { Link } from 'react-router-dom';
import abbreviateFastener from '../utils/abbreviateFastener';

const FastenerListItem = (props) => {
    const fastenerAbbreviation = abbreviateFastener(props.fastener);

    const { 
        id, 
        thruHolePart, threadedHolePart, // Undefined will not show
        partA, partB, // Undefine will not show
        quantity 
    } = props.fastener;

    return (
        <Link className="list__item" to={`/edit/${id}`}>
            <div className="list-item__title">
                <p>{fastenerAbbreviation}</p>
            </div>

            <div className="list-item__box">
                <div>
                    <p>{thruHolePart}{partA}</p>
                    <p>{threadedHolePart}{partB}</p>
                </div>

                <div>
                    <p>{quantity}</p>
                </div>
            </div>
            
        </Link>
    )
};

export default FastenerListItem;