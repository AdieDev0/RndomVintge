import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { RiMenu4Fill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-white w-full'>
      <div className='h-36 flex justify-between items-center p-5 md:p-14'>
        {/* Logo */}
        <h1 className='font-Sedgwick text-5xl cursor-pointer'>RndomVintge</h1>
        
        {/* Desktop Menu - Hidden on small screens */}
        <ul className='hidden md:flex items-center text-black/95'>
          <li className='mx-4 cursor-pointer font-Ubuntu'>About Me</li>
          <li className='mx-4 cursor-pointer font-Ubuntu'>Contact Me</li>
          <FaInstagram size={20} className='mx-2 cursor-pointer hover:text-black/50 duration-300 ease-in-out' />
          <IoLogoGithub size={20} className='mx-4 cursor-pointer hover:text-black/50 duration-300 ease-in-out' />
        </ul>

        {/* Mobile Menu Toggle - Visible only on small screens */}
        <div className='md:hidden flex items-center'>
          {isMenuOpen ? (
            // Close icon when the menu is open
            <MdOutlineClose
              size={24}
              className='cursor-pointer'
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            />
          ) : (
            // Menu icon when the menu is closed
            <RiMenu4Fill
              size={24}
              className='cursor-pointer'
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            />
          )}
        </div>
      </div>
      
      {/* Mobile Menu - Visible only when isMenuOpen is true */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className='flex flex-col items-start text-black/95 p-5'>
          <li className='py-2 cursor-pointer font-Ubuntu'>About Me</li>
          <li className='py-2 cursor-pointer font-Ubuntu'>Contact Me</li>
          <FaInstagram size={45} className='py-2 cursor-pointer hover:text-black/50 duration-300 ease-in-out' />
          <IoLogoGithub size={45} className='py-2 cursor-pointer hover:text-black/50 duration-300 ease-in-out' />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
