import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className='bg-neutral-800 py-3'>
        <nav className='flex justify-between items-center px-6'>
            <div className='text-2xl text-gray-200'><Link className='text-white hover:text-red-600 text-2xl mx-2' href={"/"}>Portfolio</Link></div>
        <ul className='flex gap-5'>
        <li><Link className='text-white hover:text-red-600 text-2xl mx-2' href={"/"}>Home</Link></li>
        <li><Link className='text-white  hover:text-red-600 text-2xl mx-2 ' href={"/about"}>About</Link></li>
        <li><Link className='text-white   hover:text-red-600 text-2xl mx-2' href={"/skills"}>Skills</Link></li>
        <li><Link className='text-white  hover:text-red-600 text-2xl mx-2' href={"/projects"}>Projects</Link></li>
      </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
