import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='w-full h-16 bg-accentColor text-black flex items-center justify-center max-w-1200 mx-auto rounded-br-3xl rounded-bl-3xl'>
        <Link to={'/'}>Noodle</Link>
    </div>
  )
}

export default Navbar