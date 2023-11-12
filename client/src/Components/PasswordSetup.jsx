import React from 'react'
import { Link } from 'react-router-dom'

const PasswordSetup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
      <div>
          <img
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699521091/ff_u43duh.jpg"
            alt=""
            className="w-[500px] h-full hidden rounded-none md:block object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-4 md:p-8">
          <span className="mb-2 text-4xl font-semibold">Password Set-Up</span>

          <span className="font-ligt text-gray-400"></span>
          <div className="py-4">
            <span className="mb-2 text-md">Full Name</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              id="name"
            />
          </div>

          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
           
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Confirm Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <Link to='/'>
          <button className='bg-orange-300 mt-9 rounded-md p-3 w-96'>Back To Login</button>
          </Link>
          

          
        </div>
        
      </div>
    </div>
  )
}

export default PasswordSetup