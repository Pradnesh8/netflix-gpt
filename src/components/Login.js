import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const handleToggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div className='relative bg-gradient-to-b from-black to-gray-900 flex justify-center'>
            <Header />
            <img className='opacity-60' src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg-cover' />

            <form style={{ backgroundColor: "rgba(0, 0, 0, .75)" }} className='absolute bg-black rounded-md top-[20%] flex flex-col gap-4 p-4 m-4 w-1/4 mx-auto text-white'>
                <h1 className='m-2 text-2xl'>
                    {
                        isSignInForm ? "Sign In" : "Sign Up"
                    }
                </h1>
                {
                    !isSignInForm &&
                    <input className='p-3 m-2 bg-slate-700 rounded-sm' type="text" name="fname" id="fname" placeholder='Full name' />
                }
                <input className='p-3 m-2 bg-slate-700 rounded-sm' type="text" name="email" id="email" placeholder='Email Address' />
                <input className='p-3 m-2 bg-slate-700 rounded-sm' type="password" name="password" id="password" placeholder='Password' />
                <button className='p-3 m-2 bg-red-700 rounded-md'>
                    {
                        isSignInForm ? "Sign In" : "Sign Up"
                    }
                </button>
                <p onClick={handleToggleForm} className='m-2 cursor-pointer mb-4 text-gray-500'>
                    {
                        isSignInForm ? "New to Netflix? Sign up now." : "Already a member? Sign in now."
                    }

                </p>
            </form>
        </div>
    )
}

export default Login