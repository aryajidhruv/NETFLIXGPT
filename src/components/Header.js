import {  onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/fireBase';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            navigate("/error")
          });
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/");
            }
          });
          return unsubscribe;
    }, [])

  return (
    <div className='absolute w-screen px-8 py-6 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={Logo} alt="netflix-logo"/>

     {user && (
        <div className='flex p-2 justify-between items-center gap-3'>
          <img className='w-12 h-12 rounded-lg' alt='user-icon' src={user.photoURL} />
          <span className='text-white font-semibold'>{user.displayName}</span>
          <button className='font-bold text-white' onClick={handleSignOut}> Sign out</button>
        </div>
      )}
    </div>
  )
}

export default Header