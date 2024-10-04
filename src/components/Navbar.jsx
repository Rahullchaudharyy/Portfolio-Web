

import React, { useState } from "react";
import { SiRedux } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {IsMenuOpen && 
        <div
          className={`bg-white p-4 flex flex-col justify-center font-mono items-center absolute w-[95%] rounded-lg left-1/2 transform -translate-x-1/2 top-3 md:hidden `}
        >
          <div className="h-[30%] w-full">
            <div className="bg-transparent h-[60px] flex w-full px-3">
              <div className="h-full w-[50%] flex items-center">
                {/* <SiRedux className="h-3 text-[30px] rounded-full p-0 " /> */}
                <h1 className="text-black font-bold text-[30px]">Rahul.Dev</h1>
              </div>

              <div className="h-full w-[50%] flex items-center justify-end">
                {/* Toggling IsMenuOpen state when clicking on the Hamburger icon */}
                {IsMenuOpen ? (
                  <RxCross2 onClick={() => setIsMenuOpen(!IsMenuOpen)} />
                ) : (
                  <RxHamburgerMenu
                    className="cursor-pointer"
                    onClick={() => setIsMenuOpen(!IsMenuOpen)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="h-[70%] w-full px-3 flex flex-col gap-5">
            <h1 className="text-[20px]">Home</h1>
            <h1 className="text-[20px]">Skills</h1>
            <h1 className="text-[20px]">About</h1>
            <h1 className="text-[20px]">Projects</h1>
          </div>
        </div>
       }
        <div className={`bg-transparent h-[60px] flex w-full font-mono p-12`}>
          <div className="h-full w-[50%] md:w-[30%] flex items-center">
            {/* <SiRedux className="h-3 text-[30px] rounded-full p-0 " /> */}
            <h1 className="text-black font-bold text-[30px]">Rahul.Dev</h1>
          </div>
        
          <div className="md:hidden h-full w-[50%] flex items-center justify-end">
            {/* Toggling IsMenuOpen state when clicking on the Hamburger icon */}
            <RxHamburgerMenu
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!IsMenuOpen)}
            />
          </div>
          <div className="hidden md:flex gap-10 px-4 items-center h-full w-[70%]   ">
          <h1 className="text-[15px] cursor-pointer  font-bold">Home</h1>
            <h1 className="text-[15px] cursor-pointer  font-bold">Skills</h1>
            <h1 className="text-[15px] cursor-pointer  font-bold">About</h1>
            <h1 className="text-[15px]  cursor-pointer font-bold">Projects</h1>
          </div>

        </div>
      

      {/* ${IsMenuOpen?'hidden':''} */}
    </>
  );
};

export default Navbar;
