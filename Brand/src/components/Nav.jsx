import React from 'react'

const Nav = () => {
  return (

    <div className='flex justify-between  items-center h-[70px]  max-w-[1200px] mx-auto'>
        <div className='font-bold text-2xl'>Nike</div>
        <div>
            <ul className='flex font-bold'>
                <li href="" className='p-2.5'>Home</li>
                <li href="" className='p-2.5'>Location</li>
                <li href="" className='p-2.5'>About</li>
                <li href="" className='p-2.5'>Contact</li>
            </ul>
        </div>
        <div><button type='button' className='px-5 py-1 bg-red-500 text-white'>Log in</button></div>
    </div>
  )
}

export default Nav