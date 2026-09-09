import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../utils/fireBase"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { background, profileLogo } from '../utils/constants'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isSingInForm, setIsSingInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleButtonclick = () => {
    const message = validateData(email.current.value, password.current.value)
    setErrorMessage(message)

    if (message) return

    if (!isSingInForm) {
      // Sign Up flow
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(async (userCredential) => {
          await updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/181457664?v=4"
          })

          const { uid, email, displayName, photoURL } = auth.currentUser
          dispatch(addUser({ uid, email, displayName, photoURL }))

          navigate("/browse")
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message)
        })
    } else {
      // Sign In flow
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(async (userCredential) => {
          // Self-heal: if this account has no photo, or the old broken placeholder, fix it
          if (!auth.currentUser.photoURL || auth.currentUser.photoURL.includes("example.com")) {
            await updateProfile(auth.currentUser, {
              photoURL: {profileLogo}
            })
          }

          const { uid, email, displayName, photoURL } = auth.currentUser
          dispatch(addUser({ uid, email, displayName, photoURL }))

          navigate("/browse")
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message)
        })
    }
  }

  const handletoggle = () => {
    setIsSingInForm(!isSingInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute -z-10'>
        <img
          src={background}
          alt='logo'
          className='h-screen w-screen object-cover'
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-6 sm:p-12 bg-black w-11/12 sm:w-3/4 md:w-1/2 lg:w-3/12 my-16 sm:my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'
      >
        <h1 className='font-bold text-2xl sm:text-3xl py-4'>
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSingInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-3 sm:p-4 my-3 sm:my-4 w-full placeholder-white rounded-lg bg-gray-500 text-sm sm:text-base'
          />
        )}

        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-3 sm:p-4 my-3 sm:my-4 w-full placeholder-white rounded-lg bg-gray-500 text-sm sm:text-base'
        />

        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-3 sm:p-4 my-3 sm:my-4 w-full rounded-lg placeholder-white bg-gray-500 text-sm sm:text-base'
        />

        <p className='text-red-400 text-sm sm:text-base'>{errorMessage}</p>

        <button
          type='button'
          className='p-3 sm:p-4 mt-4 sm:mt-6 mb-4 w-full bg-red-700 font-semibold rounded-lg text-sm sm:text-base'
          onClick={handleButtonclick}
        >
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='m-3 cursor-pointer text-sm sm:text-base' onClick={handletoggle}>
          {isSingInForm ? "New to Netflix ? Sign Up Now" : "Already registered ? Sign In now"}
        </p>
      </form>
    </div>
  )
}

export default Login