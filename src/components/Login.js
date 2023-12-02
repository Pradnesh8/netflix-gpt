import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateSignInForm, validateSignUpForm } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BG_URL, DEFAULT_AVATAR } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const cpassword = useRef(null)
    const handleToggleForm = () => {
        if (isSignInForm) {
            email.current.value = "";
            password.current.value = "";
        } else {
            name.current.value = "";
            email.current.value = "";
            password.current.value = "";
            cpassword.current.value = "";
        }
        setIsSignInForm(!isSignInForm)
    }
    const handleSubmitForm = () => {
        let isValid = true;
        if (isSignInForm) {
            const error = validateSignInForm(email.current.value, password.current.value)
            if (error) {
                isValid = false
            }
            setErrMessage(error);
            if (!isValid) return;
            // sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const { uid, photoURL, displayName } = user;
                    const _email = auth.currentUser.email;
                    dispatch(addUser({ uid: uid, displayName: displayName, email: _email, photoURL: photoURL }));
                    email.current.value = "";
                    password.current.value = "";
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + " : " + errorMessage)
                });

        }
        else {
            const error = validateSignUpForm(name.current.value, email.current.value, password.current.value, cpassword.current.value)
            if (error) {
                isValid = false
            }
            setErrMessage(error);
            if (!isValid) return;
            // sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: DEFAULT_AVATAR
                    }).then(() => {
                        const { uid, photoURL, displayName } = auth.currentUser;
                        const _email = auth.currentUser.email;
                        dispatch(addUser({ uid: uid, displayName: displayName, email: _email, photoURL: photoURL }));
                        name.current.value = "";
                        email.current.value = "";
                        password.current.value = "";
                        cpassword.current.value = "";
                    }).catch((error) => {
                        setErrMessage(error.message);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + " : " + errorMessage)
                });
        }
    }
    return (
        <div className='relative bg-gradient-to-b from-black to-gray-900 flex justify-center overflow-x-hidden'>
            <Header />
            <img className='opacity-60' src={BG_URL} alt='bg-cover' />

            <form onSubmit={(e) => e.preventDefault()} style={{ backgroundColor: "rgba(0, 0, 0, .75)" }} className='absolute bg-black rounded-md top-[16%] flex flex-col gap-4 p-4 m-4 w-1/4 mx-auto text-white'>
                <h1 className='m-2 text-2xl'>
                    {
                        isSignInForm ? "Sign In" : "Sign Up"
                    }
                </h1>
                {
                    !isSignInForm &&
                    <input ref={name} className='p-3 m-2 bg-slate-700 rounded-sm' type="text" name="fname" id="fname" placeholder='Full name' />
                }
                <input ref={email} className='p-3 m-2 bg-slate-700 rounded-sm' type="text" name="email" id="email" placeholder='Email Address' />
                <input ref={password} className='p-3 m-2 bg-slate-700 rounded-sm' type="password" name="password" id="password" placeholder='Password' />
                {
                    !isSignInForm &&
                    <input ref={cpassword} className='p-3 m-2 bg-slate-700 rounded-sm' type="password" name="password" id="password" placeholder='Confirm Password' />
                }
                <p className='text-red-600 font-bold ml-2'>{errMessage}</p>
                <button className='p-3 m-2 bg-red-700 rounded-md' onClick={handleSubmitForm}>
                    {
                        isSignInForm ? "Sign In" : "Sign Up"
                    }
                </button>
                <p onClick={handleToggleForm} className='m-2 cursor-pointer mb-4'>
                    {
                        isSignInForm ? "New to Netflix? Sign up now." : "Already a member? Sign in now."
                    }

                </p>
            </form>
        </div>
    )
}

export default Login