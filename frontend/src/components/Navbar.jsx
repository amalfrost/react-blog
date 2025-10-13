import React from 'react'

function Navbar() {
  return (
    <div className=' bg-gray-500 p-4' >
        <ul className='flex gap-1 justify-between ' >
            <li className='cursor-pointer ' >Home</li>
            <li className='cursor-pointer ' >Blogs</li>
            <li className='cursor-pointer ' >About Me</li>
        </ul>
    </div>
  )
}

export default Navbar