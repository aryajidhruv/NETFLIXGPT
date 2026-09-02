import React, { useState } from 'react'
import Header from './Header'



const Login = () => {
    //This toggle function use for changing the singup form to sing in 
    const[isSingInForm,setIsSingInForm]= useState(true);
    function handletoggle(){
        setIsSingInForm(!isSingInForm)
       
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a00fdfd7-4916-4f12-b5ff-c05b9d7b4d07/web/IN-en-20260824-TRIFECTA-perspective_26443db2-0249-420d-bb73-77cfeea330e5_small.jpg'
        alt='logo' className='h-screen w-screen'/>
      </div>

      <form className='absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
        <h1 className='font-bold text-3xl py-4 '>
            {isSingInForm?"Sign In" : "Sign Up"}</h1>

           {!isSingInForm &&( <input type='text' 
            placeholder='Full Name' 
            className='p-4 my-4 w-full  placeholder-white rounded-lg bg-gray-500' />)}
        
        <input type='text' 
            placeholder='Email Address' 
            className='p-4 my-4 w-full  placeholder-white rounded-lg bg-gray-500' />

        <input type='text'  
                placeholder='Password' 
                className='p-4 my-4 w-full rounded-lg  placeholder-white bg-gray-500   ' />

        <button className='p-4 mt-6 mb-4 w-full bg-red-700 font-semibold rounded-lg ' >{isSingInForm?"Sign In" : "Sign Up"}</button>
        <p className='m-3 cursor-pointer ' onClick={handletoggle}>
            
            {isSingInForm?"New to Netflix ? Sign Up Now" : "Already registered ? Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login