import React from 'react'

function Navbar() {

  return (
    <div>
      <nav className='flex gap-8 justify-around items-center h-20 border-2 border-yellow-500'>
        <h1 className='text-3xl'>Navbar</h1>
        <div className='flex justify-center items-center gap-8'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
