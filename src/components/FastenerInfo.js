import React from 'react';
import { fastenerTechInfo } from '../utils/fastenerDatabase';

const FastenerInfo = (props) => {
    const minEngagement = props.size * 1.5;
    const preload = fastenerTechInfo[props.size]["preload"][props.material];
    const tighteningTorque = fastenerTechInfo[props.size]["tighteningTorque"][props.material];

    return (
        <div className="form__box">
            <p className="form__title">Technical Information</p>
            
            <div className="info__item">
                <label className="info__label">Preload (kN)</label>
                <input
                    type="text"
                    disabled
                    className="text-input"
                    value={preload / 1000}
                />
            </div>

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

            <div>
                <p className="info__label">Note</p>
                <p className="info__message">
                The preload and tightening toruqe are the maximum recommended value, based on a coeff friction of 
                0.14 (steel) and 0.2 (stainless steel), respectively.
                </p>
            </div>

        </div>
    )
}

export default FastenerInfo;