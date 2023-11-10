import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Completion = () => {
  return (
    <>
    <Header/>

    <div className="flex">
        <div className="flex-1">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1699608648/check-mark-white-tick-yellow-circle-sign-valid-seal-icon-vector-illustration-white-background-check-mark-white-tick-149985746_f6zy82.jpg" alt=""
                className="w-20"
              />
              <h2 className="text-2xl font-bold">Completion</h2>
            </div>
            <form className="space-y-4 mb-3">
            <div className="flex flex-col items-center">
              <p className='mb-14 text-4xl font-semibold text-green-500'>Successfully completed</p>
              <Link to="/idverify">
                <button className="btn btn-info text-center">Home</button>
              </Link>
            </div>
               
            
              
               
              
        
                
              
            </form>
          </div>
        </div>
      </div>

    
    </>
  )
}

export default Completion