import React from 'react'

const Header = () => {
  return (

    // This the Header 

    // (bg-gradient-to-b from-black) this is for making the netfix logo highlighte
    <div className='absolute w-40 px-8 py-6 bg-gradient-to-b from-black z-10'>


     {/*This is the netflix log*/}
      <img className='w-44 ' src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg" alt="netflix-logo"/>
    </div>
  )
}

export default Header
