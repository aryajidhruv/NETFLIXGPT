import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_small.jpg'
        alt='logo'/>
      </div>

      <form className='absolute p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold'>Sign In</h1>
        <input type='text'placeholder='Email address' className='p-2 m-2'/>
        <input type='text'placeholder='Password' className='p-2 m-2'/>
        <button >Singup</button>
       
      </form>
    </div>
  )
}

export default Login
