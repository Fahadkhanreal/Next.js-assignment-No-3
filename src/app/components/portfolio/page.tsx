import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (

    
    <div className='h-32 bg-neutral-900 text-white '>
      <h1 className='text-center text-3xl text'>Class Projects</h1>

      <ul>
        <li><Link className='ml-4  text-2xl hover:text-red-600' href={"https://next-js-assignment-opal.vercel.app/"}>   Project 1</Link></li>
      </ul>

      <ul>
        <li><Link className='ml-4 text-2xl' href={"https://next-js-assignment-2-flame.vercel.app/"}>  Project 2</Link></li>
      </ul>
    </div>
  )
}

export default Portfolio
