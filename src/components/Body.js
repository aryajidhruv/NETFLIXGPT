import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useDispatch } from 'react-redux';

const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const {vid,email,displayName } = user.uid;
              dispatch(({vid:vid,email:email,displayName:displayName}))
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },[])




  return (
    <div>
       <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body
