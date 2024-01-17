import React from 'react'


const Hero = () => {
  return (
    <div className='h-screen w-full flex items-center'>
        <div className='mx-auto max-w-[1200px] h-[600px] flex'>
            <div className='flex-1'>
                <h1 className='font-bold text-8xl'>YOUR FEET DESERVE THE BEST </h1>
                <p className='w-[404px] p-3 my-4'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div>
                    <button type='button' className='px-5 py-1  bg-red-500 text-white'>Shop now</button>
                    <button type='button' className='px-5 py-1 mx-5 border-2 border-black'>Category</button>
                </div>
            </div>
            <div className='flex-1'> <img src='/hero-image.png'/></div>
        </div>    
    </div>
  )
}

export default Hero