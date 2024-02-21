import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>

      <header>
        <div className="container-nav flex gap-7 justify-between items-center">
          <div className="logo">
            <h1 className='logo text-2xl font-medium text-black-600'>
              <Link to={"/"}>Restaurant</Link>
            </h1>
          </div>
          <nav>
            <ul className='flex gap-7 justify-between items-center'>
              <li className='menu text-xl font-medium text-black-600 hover:text-rose-200'>
                <Link to={"/"}>Home</Link>
              </li>
              <li className='menu text-xl font-medium text-black-600 hover:text-rose-200'>
                <Link to={"/details"}>Details</Link>
              </li>
              <li className='menu text-xl font-medium text-black-600 hover:text-rose-200'>
                <Link to={"/search"}>Search</Link>
              </li>
            </ul>
          </nav>
          <div className='btn text-black-600 hover:text-rose-200 py-2 px-3 rounded-[20px]'>
            <button className='text-xl font-medium'>Get Started</button>
          </div>
        </div>
      </header>

    </>
  )
}
