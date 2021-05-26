import React from 'react';
import { fastenerTechInfo } from '../utils/fastenerDatabase';

const FastenerInfo = (props) => {
    const minEngagement = props.size * 1.5;
    
    const tighteningTorque = fastenerTechInfo[props.size]["tighteningTorque"][props.material];

    return (
        <div className="form__box">
            <p className="form__title">Technical Information</p>
            
            <div className="info__item">
                <label className="info__label">Tighentening Torque (Nm)</label>
                <input
                    type="text"
                    disabled
                    className="text-input"
                    value={tighteningTorque}
                />
            </div>

            <div className="info__item">
                <label className="info__label">Minimum Thread Engagement (mm)</label>
                <input
                    disabled
                    type="text"
                    className="text-input"
                    value={minEngagement}
                />
            </div>

        </div>
    )
}

export default FastenerInfo;