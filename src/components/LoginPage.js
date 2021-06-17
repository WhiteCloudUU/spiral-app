import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithMicrosoft } from '../actions/auth';

export const LoginPage = ({ startLoginWithGoogle, startLoginWithMicrosoft }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">
                Spiral
            </h1>

            <p className="box-layout__subtitle">
                Organize your fasteners. Not a pain anymore.
            </p>

            <div className="stack-buttons">
                <button 
                    onClick={startLoginWithGoogle}
                    className="button"
                >
                    Login with Google
                </button>

                <button 
                    onClick={startLoginWithMicrosoft}
                    className="button"
                >
                    Login with Microsoft
                </button>
            </div>

        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithMicrosoft: () => dispatch(startLoginWithMicrosoft())
});
 
export default connect(undefined, mapDispatchToProps)(LoginPage);