import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    // Changed aspect-video to h-screen
    <div className='w-screen h-screen pt-[15%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 flex flex-col justify-start'>
      <h1 className='text-3xl md:text-6xl font-extrabold drop-shadow-md tracking-tight max-w-xl'>
        {title}
      </h1>

      <p className='py-7 text-sm md:text-base w-full md:w-1/2 text-gray-200 line-clamp-3 leading-relaxed drop-shadow-sm'>
        {overview}
      </p>

      <div className='flex items-center gap-3 my-2'>
        <button className='flex items-center gap-2 bg-white hover:bg-white/80 text-black px-6 py-2.5 rounded-md font-bold text-lg transition duration-200 cursor-pointer shadow-md active:scale-95'>
          ▶ Play
        </button>
        
        <button className='flex items-center gap-2 bg-gray-500/70 hover:bg-gray-500/50 text-white px-6 py-2.5 rounded-md font-semibold text-lg transition duration-200 cursor-pointer shadow-md backdrop-blur-sm active:scale-95'>
          ⓘ More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle