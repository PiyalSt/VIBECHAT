import React from 'react'
import profileImg from '../assets/profile.png'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications, IoMdLogOut } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
      <section id='navbar-components'>
        <div className='w-28 h-screen flex flex-col items-center justify-between py-8 bg-primary'>
          <div className='w-20 h-20 bg-gray-950 rounded-full flex items-center justify-center cursor-pointer'>
            <img className='w-full h-full object-cover p-3' src={profileImg} alt="profileImg" />
          </div>

          <div className='flex flex-col gap-4'>

            <li className='group list-none relative overflow-hidden cursor-pointer rounded-l-full py-3 pl-4 pr-10 transition-all duration-300 ease-out
              hover:bg-white hover:shadow-lg hover:translate-x-2 focus-within:translate-x-1'>

              <FaHome className='text-white text-4xl transition-all duration-300 
                group-hover:text-primary group-hover:scale-110 group-hover:rotate-3' />
            </li>

            <li className='group list-none relative overflow-hidden cursor-pointer rounded-l-full py-3 pl-4 pr-10 transition-all duration-300 ease-out
              hover:bg-white hover:shadow-lg hover:translate-x-2'>

              <IoChatbubbleEllipsesSharp className='text-white text-4xl transition-all duration-300 
                group-hover:text-primary group-hover:scale-110 group-hover:-rotate-3' />
            </li>

            <li className='group list-none relative overflow-hidden cursor-pointer rounded-l-full py-3 pl-4 pr-10 transition-all duration-300 ease-out
              hover:bg-white hover:shadow-lg hover:translate-x-2'>

              <IoIosNotifications className='text-white text-4xl transition-all duration-300 
                group-hover:text-primary group-hover:scale-110 group-hover:animate-pulse' />
            </li>
            
            <li className='group list-none relative overflow-hidden cursor-pointer rounded-l-full py-3 pl-4 pr-10 transition-all duration-300 ease-out
              hover:bg-white hover:shadow-lg hover:translate-x-2'>

              <AiFillSetting className='text-white text-4xl transition-all duration-300 
                group-hover:text-primary group-hover:scale-110 group-hover:animate-pulse' />
            </li>

          </div>

          <div>
            <li className='list-none cursor-pointer relative overflow-hidden hover:overflow-visible duration-300'>
              <IoMdLogOut className="text-4xl text-white" />

              <span className='absolute -top-11 -left-6 bg-white text-primary py-2 px-4 rounded-full font-poppins font-medium '>
                Logout
              </span>

            </li>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
