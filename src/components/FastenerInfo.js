import React from 'react';

const FastenerInfo = (props) => (
    
    <div className="info__box">
        <p className="form__title">Technical Information</p>
        <div className="info__item">
            <label className="info__title">Minimum Thread Engagement (mm)</label>
            <input
                type="text"
                disabled    
                className="text-input"
                value={1.5}
            />
        </div>

        <div className="info__item">
            <label className="info__title">Preload torque (Nm)</label>
            <input
                type="text"
                disabled    
                className="text-input"
                value={2}
            />
        </div>

       
    </div>
)

export default FastenerInfo;