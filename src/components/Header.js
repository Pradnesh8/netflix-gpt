import { signOut } from 'firebase/auth';
import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            alert("Something went wrong")
            // redirect to error page
        });
    }
    return (
        <div className='w-screen absolute flex justify-between bg-gradient-to-b from-black items-center'>
            <img className='w-56 ml-2 mt-1 z-10' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {
                user && (
                    <div className='flex mr-6 items-center'>
                        <img src={user.photoURL} className='mr-3' alt="user-photo" />
                        <div className='flex flex-col'>
                            <p className='text-lg font-medium'>
                                {user.displayName}
                            </p>
                            <button className='text-xs text-white' onClick={handleSignOut}>
                                Sign out
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Header