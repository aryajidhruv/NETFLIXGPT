import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/fireBase';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return unsubscribe;
  }, [dispatch,navigate]);

  return (
    <div className='absolute top-0 left-0 w-full px-6 md:px-12 py-4 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-30 flex justify-between items-center'>
      {/* Netflix Logo */}
      <img
        className='w-36 md:w-44 object-contain cursor-pointer transition-transform duration-200 hover:scale-105'
        src={Logo}
        alt='netflix-logo'
      />

      {/* User Profile & Actions */}
      {user && (
        <div className='flex items-center gap-3 md:gap-4 bg-black/30 backdrop-blur-sm p-1.5 pr-4 rounded-full border border-white/10 shadow-lg'>
          <img
            className='w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-white/20'
            alt='user-icon'
            src={user.photoURL}
          />
          <span className='hidden sm:inline-block text-white text-sm font-medium tracking-wide'>
            {user.displayName}
          </span>
          <button
            className='bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full transition duration-200 active:scale-95 cursor-pointer shadow-md'
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;