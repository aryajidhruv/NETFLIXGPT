import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/fireBase"

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleButtonclick = () => {
    const message = validateData(email.current.value, password.current.value)
    setErrorMessage(message)

    if (!message) {
      if (!isSingInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
          })
          .catch((error) => {
            setErrorMessage(error.code + "-" + error.message)
          })
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
          })
          .catch((error) => {
            setErrorMessage(error.code + "-" + error.message)
          })
      }
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
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_small.jpg'
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