import React from 'react'
import { Link } from 'react-router-dom';
import home from '../assets/home.png';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4 flex justify-between items-center'>
        <h1 className='text-white text-3xl'>Streamer</h1>
        <div>
            <Link to="/" className='text-white mr-4'>
                <img src={home} alt="">Home</img>
            </Link>
            <Link to="/" className='text-white mr-4'>
                <img src={home} alt="">SignIn</img>
            </Link>
            <Link to="/" className='text-white mr-4'>
                <img src={home} alt="">Logout</img>
            </Link>
        </div>
    </nav>
  );
};

export default Navbar;