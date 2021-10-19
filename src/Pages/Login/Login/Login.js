import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import initializeAuthentication from '../firbase.init';
import './Login.css'

initializeAuthentication();

const Login = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [error, setError] = useState(' ');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth()

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must have 2 upper case');
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            newRegister(email, password);
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError(' ');
            })
            .catch(error => {
                setError(error.message);

            })

    }
    const newRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError(' ');
                verifyEmail();
            })
            .catch(error => {
                setError(error.message);

            })
    }
    const verifyEmail = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="login-form bg-light mt-4 p-4">
                            <form onSubmit={handleOnSubmit} action="" method="" className="row g-3">
                                <h3 className='text-primary'>Please {isLogin ? 'Login' : 'Register'}</h3>
                                <div className="col-12">
                                    <div className="form-check">

                                        <p className='text-success'>Are you a user? If user check the box <br /> if not please register</p>
                                        <input onClick={toggleLogin} className="form-check-input" type="checkbox" id="rememberMe" />

                                    </div>
                                </div>
                                <div className="col-12">
                                    <label>Email</label>
                                    <input onBlur={handleEmailChange} type="text" name="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="col-12">
                                    <label>Password</label>
                                    <input onBlur={handlePasswordChange} type="password" name="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="col-12">
                                    <div className='text-danger mt-4 mb-2'>{error}</div>
                                    <button type="submit" className="btn btn-dark float-end">{isLogin ? 'Login' : 'Register'}</button>
                                </div>
                            </form>
                            <hr className="mt-4" />
                            <div className="col-md-12"> <button onClick={signInUsingGoogle} className="btn btn-lg btn-google btn-block text-uppercase btn-outline mt-5"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> Signin Using Google</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;