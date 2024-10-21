import React, { useState } from 'react';
import logoImage from '../assets/logo';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [alert, setAlert] = useState(false);

  return (
    <div className='relative'>
      {/* Large screen Navbar */}
      <div className='bg-transparent p-5 h-20 w-full top-0 flex items-center justify-between px-4 shadow-md z-30'>
        <Link to='/'><div className='flex items-center'>
          <img src={logoImage} alt="Logo" className='h-16' />
        </div></Link>
        <div className='text-black flex items-center justify-center gap-12'>
          <Link to="/" className='mt-1'>Home</Link>
          {props.isAuth ? (
            <div className='flex items-center gap-4'>
              <button 
                onClick={() => setAlert(true)}
                className='p-3 border-2 border-black mb-2 hover:bg-gray-200 transition duration-300'>
                Log Out
              </button>
              <Link to='/Profile' className='mt-1'>Profile</Link>
            </div>
          ) : (
            <Link to="/LoginPage">
              <button className='p-3 border-2 border-black mb-2 hover:bg-gray-200 transition duration-300'>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      {alert && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40' onClick={() => setAlert(false)}>
          <div className='bg-white shadow-lg lg:w-[500px] h-[200px] z-50 p-6 rounded-lg flex flex-col items-center justify-center gap-4' onClick={(e) => e.stopPropagation()}>
            <p className='text-xl'>Are you sure you want to log out?</p>
            <div className='flex gap-4'>
              <button
                className='p-3 border-2 border-red-500 rounded-lg hover:bg-red-100 transition duration-300'
                onClick={() => setAlert(false)}>
                Cancel
              </button>
              <button
                className='p-3 bg-green-600 text-white rounded-lg w-20 hover:bg-green-700 transition duration-300'
                onClick={props.HandlesignOut}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
