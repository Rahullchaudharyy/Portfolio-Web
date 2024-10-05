import React from 'react'

const Home = () => {
  return (
   
    <div className=' h-auto md:h-screen mt-7 w-[100vw] bg-transparent flex justify-items-start font-mono px-10 pb-20'>
    <div className='h-full w-[100%] md:w-[60%] flex justify-center gap-[5vmin] flex-col'>
      <div>
        <h1 className='text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-extrabold md:text-8xl'>Rahul.dev</h1>
        <h1 className='text-4xl font-[900] sm:text-5xl md:text-7xl'>Front-end developer</h1>
      </div>
      <p className='text-gray-500'>A developer is someone who turns coffee into code, problems into solutions, and ideas into reality—one bug fix at a time."</p>
      <div className='flex gap-4'>
      <a href="mailto:rahulchaudhary9611@gmail.com">
  <button className="bg-black p-2 rounded-full text-white">
    Get in Touch {">"}
  </button>
</a>
        <button >GitHub</button>
      </div>
    </div>
    <div className='h-full hidden md:flex w-[40%]'>
    </div>
  </div>
  )
}

export default Home