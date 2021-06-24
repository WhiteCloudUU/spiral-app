import React from 'react';
import { connect } from 'react-redux';
import {
    startLoginWithGoogle,
    startLoginWithMicrosoft,
    startLoginWithEmailAndPassword
} from '../actions/auth';

export class LoginPage extends React.Component {
    state = {
        email: "",
        password: ""
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onLogin = () => {
        const email = this.state.email;
        const password = this.state.password;
        console.log(email);
        console.log(password);
        this.props.startLoginWithEmailAndPassword(email, password);
    };

    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">
                        Spirals
                    </h1>

                    <p className="box-layout__subtitle">
                        Jinzhao, do you have a M4 screw?
                    </p>

                    <div className="login-container">

                        <input
                            type="text"
                            className="text-input"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />

                        <input
                            type="password"
                            className="text-input"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>

                    <div className="stack-buttons">
                        <button
                            onClick={this.onLogin}
                            className="button"
                        >
                            Login
                        </button>

                        <p> ----- Or ----- </p>

                        <button
                            onClick={this.props.startLoginWithGoogle}
                            className="button"
                        >
                            Sign in with Google
                        </button>

                        <button
                            onClick={this.props.startLoginWithMicrosoft}
                            className="button"
                        >
                            Sign in with Microsoft
                        </button>

                    </div>

                </div>
            </div>
        );
    }

}


const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithMicrosoft: () => dispatch(startLoginWithMicrosoft()),
    startLoginWithEmailAndPassword: (email, password) => dispatch(startLoginWithEmailAndPassword(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);