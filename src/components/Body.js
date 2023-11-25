import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'

const Body = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const { uid, displayName, email, photoURL } = user;
                console.log("logged In")
                // dispatch(addUser({ uid:uid, displayName, email, photoURL }))
            } else {
                dispatch(removeUser());
            }
        });
    }, [])
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body