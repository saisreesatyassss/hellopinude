"use client";
import React from 'react';
import logo from '../../assests/PinTude_LogoVertical (1).svg'
import hindiLogo from "../../assests/PinTude_Logo_Hindi.svg"
import Image from 'next/image';
import Hamburger from './HamBurger';
import HeaderButton from './ui/headerButton';
import Logo from './ui/Logo';
import axios from 'axios';
import { LanguageSelector } from './ui/LanguageSelector';
import { usePathname } from 'next/navigation';

const Navbar = () => {


  const pathname = usePathname();
  console.log(pathname === "/hindi");

      const handleClick = async () => {
        try {
             // Sending the POST request to track button click analytics
            await axios.post('https://api.reportzai.com/api/call-analytics');
            // // alert('Button click recorded successfully!');
  
        } catch (error) {
            // console.error('Error recording button click:', error);
            // alert('Failed to record button click');
        }
    };

  return (
    <header className='reletive py-2 md:py-6'>
      
        <div className='max-w-[1327px] mx-auto'>
    <nav className="flex  lg:flex-row lg:justify-between justify-center items-center  bg-white ">
      {/* Logo Section */}
      <div className="flex  items-center p-2 lg:justify-start w-full space-x-2 lg:w-auto relative">

      {pathname === "/hindi" ? (
        <Image
          src={hindiLogo}

          loading='eager'
          alt="Hindi Pintude Logo"
          className=" md:w-[16rem] w-[116px]"
        />
      ) : (
        <Image
          src={logo}
          loading='eager'
          alt="Pintude Logo"
          className="md:w-auto w-[116px]"
        />
      )}
       
      </div>

      {/* Links Section */}
      <div className="flex space-x-6 text-black text-sm p-2 ">
        {/* <a href="#" className="hover:text-gray-700">About us</a>
        <a href="#" className="hover:text-gray-700">Faq</a> 
        <a href="#" className="hover:text-gray-700">Contact</a> */}

        {/* <div className='ml-3 '> 
        <a    onClick={handleClick}
                onTouchStart={handleClick}  
         href="tel:+91 82373 58619"
          className="border inline lg:hidden text-sm border-black px-4 py-2 rounded-[7px] hover:bg-gray-100 transition-colors" 
        >
         Give a missed call
        </a>
        <HeaderButton className=' mt-5 border hidden lg:inline text-sm border-black px-4 py-2 rounded-[7px] hover:bg-gray-100 transition-colors'> Give a missed call</HeaderButton>
      </div> */}
    <LanguageSelector/>
      </div>

      {/* Sign Up Button */}
     
    </nav>
    </div>
    </header>
  );
};

export default Navbar;
