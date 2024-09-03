import React from "react";
import Logo from "../../assets/logo.avif"
import { GrSettingsOption } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              className="h-[120px] w-[120px]"
              alt="codebook Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              codebook
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse ">
            <span className="cursor-pointer"><FiSun /></span>
            <span className="cursor-pointer"><IoSearchOutline /></span>
            <span className="cursor-pointer"><BsCart2/></span>
            <span className="cursor-pointer"><FaRegUserCircle /></span>
            
          </div>
        </div>
      </nav>
     
    </header>
  );
};

export { Header };
