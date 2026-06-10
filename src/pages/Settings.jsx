import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import userImg02 from '../assets/user-02.png'
import { FaUserEdit } from "react-icons/fa";
import { FaKey, FaRocketchat } from 'react-icons/fa6';
import { MdAddPhotoAlternate, MdHelpOutline } from 'react-icons/md';
import { BsCircleHalf } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { NavLink } from 'react-router';


const Settings = () => {
  return (
    <>
      <section>
        <div className='flex w-full'>
          <div>
            <Navbar />
          </div>
          <div className='w-full mx-12'>
            <div className='mx-4'>
              <Search />
            </div>
            <div className='mx-4 flex'>
              <div className='relative w-6/12 border-r-2 border-gray-300'>
                <h2 className='font-poppins font-semibold text-xl text-black/90 my-4'>Profile Settings</h2>
                <div className='flex items-center gap-4 mt-10'>
                  <img src={userImg02} alt="userImg02" />
                  <div>
                    <h2 className='font-poppins font-semibold text-2xl text-black/90'>A B M Shawon Islam</h2>
                    <p className='font-poppins font-medium text-xl text-black/70'>Stay home stay safe</p>
                  </div>
                </div>

                <div className='mt-20 ml-12 flex flex-col gap-6'>
                  <div className='flex items-center gap-4'>
                    <div>
                      <FaUserEdit className='text-2xl text-black/90' />
                    </div>
                    <div>
                      <p className='font-poppins font-normal text-xl text-black/90'>Edit Profile Name</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div>
                      <FaRocketchat className='text-2xl text-black/90' />
                    </div>
                    <div>
                      <p className='font-poppins font-normal text-xl text-black/90'>Edit Profile Status Info</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div>
                      <MdAddPhotoAlternate className='text-2xl text-black/90' />
                    </div>
                    <div>
                      <p className='font-poppins font-normal text-xl text-black/90'>Edit Profile Photo</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div>
                      <MdHelpOutline className='text-2xl text-black/90' />
                    </div>
                    <div>
                      <p className='font-poppins font-normal text-xl text-black/90'>Help</p>
                    </div>
                  </div>
                </div>
                <div className='absolute -bottom-36 left-8'>
                  <h2 className='font-nunito font-medium text-xl text-black/40'>Chat application with PiyalSt</h2>
                </div>
              </div>
              <div className='relative w-6/12 ml-8'>
                <h2 className='font-poppins font-semibold text-xl text-black/90 my-4'>Profile Settings</h2>

                <div className='mt-20 ml-12 flex flex-col gap-6'>
                  <div className='flex items-center gap-4'>
                    <div>
                      <FaKey className='text-2xl text-black/90' />
                    </div>
                    <div>
                      <p className='font-poppins font-normal text-xl text-black/90'>Change Password</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div>
                      <BsCircleHalf className='text-2xl text-black/90' />
                    </div>
                    <div>
                      <p className='font-poppins font-normal text-xl text-black/90'>Theme</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div>
                      <RiDeleteBin6Line className='text-2xl text-black/90' />
                    </div>
                    <div>
                      <p className='font-poppins font-normal text-xl text-black/90'>Delete Account.</p>
                    </div>
                  </div>
                </div>

                <div className='flex gap-10 mt-16 justify-center'>
                  <NavLink to={'/login'}>
                    <button className='py-2 px-8 font-poppins font-medium text-xl bg-primary text-white rounded-full cursor-pointer'>Login</button>
                  </NavLink>
                  <NavLink to={'/registration'}>
                    <button className='py-2 px-8 font-poppins font-medium text-xl bg-primary text-white rounded-full cursor-pointer'>Registration</button>
                  </NavLink>
                </div>

                <div className='absolute -bottom-36 left-8'>
                  <h2 className='font-nunito font-medium text-xl text-black/40'>Chat application with PiyalSt</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Settings
