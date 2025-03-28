"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaHashtag,
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaNewspaper,
  FaCog
} from "react-icons/fa";

import { usePathname } from "next/navigation";

// SidebarItem component with proper TypeScript props
interface SidebarItemProps {
  label: string;
  linkTo: string; // Corrected from 'linlTo'
}

const SidebarItem = ({  label, linkTo }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === linkTo;
  const style = isActive ? " bg-gray-200 text-black" : "";

  return (
    <Link href={linkTo}>
      <div
        className={
          "flex items-center space-x-3 cursor-pointer hover:bg-gray-200 hover:text-black rounded-lg p-3" +
          style
        }
      >
        
        <span>{label}</span>
      </div>
    </Link>
  );
};

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  lg:hidden">
      <div className="lg:hidden p-4 absolute">
        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-black" />
          ) : (
            <FaBars className="w-6 h-6 text-black" />
          )}
        </button>
      </div>
<div className={+ isOpen ?"bg-[#00000050] absolute w-full h-full  ":""}>

</div>
      <div
        className={`${
          isOpen ? "translate-x-[-16px]" : " translate-x-[-274px]"
        } lg:translate-x-0 p-4 bg-white hamburger transition-transform transform  fixed w-64 h-full z-10 md:z-auto top-0 shadow-lg`}
      >
        <div className="p-4">
          <div className="flex justify-between">
           

            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6 text-black" />
              ) : (
                <FaBars className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
          <nav>
            <SidebarItem  label="About us" linkTo="" />
            <SidebarItem  label="blog" linkTo="" />
            <SidebarItem  label="contact" linkTo="" />
          <div> <a
          href="#"
          className="border text-sm border-black px-4 py-2 rounded-[7px] hover:bg-gray-100 transition-colors"
        >
          Sign up
        </a></div>  
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
