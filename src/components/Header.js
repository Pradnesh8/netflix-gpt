import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { LOGO } from '../utils/constants';
const Header = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, photoURL } = user;
                console.log("logged In");
                dispatch(addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }))
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [])
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Siggned out");
        }).catch((error) => {
            alert("Something went wrong")
            // redirect to error page
        });
    }
    return (
        <div className='w-full absolute flex justify-between bg-gradient-to-b from-black items-center z-20'>
            <img className='w-56 ml-2 mt-1' src={LOGO} alt="logo" />
            {
                user && (
                    <div className='flex mr-6 items-center'>
                        <img src={user.photoURL} className='mr-3' alt="user-photo" />
                        <div className='flex flex-col'>
                            <p className='text-lg font-medium text-white'>
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