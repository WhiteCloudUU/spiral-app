import React from 'react';
import { screwTechInfo } from '../utils/fastenerDatabase';
import generateMcmasterLink from '../utils/generateMcmasterLink';

const FastenerInfo = (props) => {
    const minEngagement = screwTechInfo[props.size]["minEngagement"];
    const preload = screwTechInfo[props.size]["preload"][props.material];
    const tighteningTorque = screwTechInfo[props.size]["tighteningTorque"][props.material];
    
    const link = generateMcmasterLink(
        props.size, 
        props.length, 
        props.headType,
        props.driveType
        );

    console.log(link);
    return (
        <div className="form__box">
            <p className="form__title">Technical Information</p>

            <div className="info__link">
                <a 
                    className="info__label"
                    href={link}
                >
                    Guide me way to Mcmaster
                </a>
            </div>

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
                    value={`${minEngagement} * Ratio`}
                />
            </div>

            <div>
                <p className="info__label">
                    Note
                </p>
                <p className="info__message">
                    1. The [ Preload ] and [ Tightening Toruqe ] are the maximum recommended value, based on a coeff friction of 
                    0.14 (steel) and 0.2 (stainless steel), respectively.
                </p>

                <p className="info__message">
                    2. A [ minimum thread engagement ] must be achieved, 
                    if the bolted joint is designed 
                    so that the bolt shank fails in tension before the threads fail in shear.
                </p>

                <p className="info__message">
                    3. Ratio = Tensile Strength of Screw / Tensile Strength of Threaded Part
                    (e.g. Ratio = 4, 12.9 screw and 6061 aluminum part.)
                </p>
               
            </div>

        </div>
    )
}

export default FastenerInfo;