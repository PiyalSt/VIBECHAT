import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import ListItems from '../components/ListItems'
import ProfileCard from '../components/ProfileCard'
import userImg01 from '../assets/user-01.png'
import userImg02 from '../assets/user-02.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IconButton } from '@mui/material'
import { BiHappy, BiSend } from 'react-icons/bi'
import { CiCamera } from 'react-icons/ci'
import ChatText from '../components/ChatText'


const Messages = () => {
  return (
    <>
      <section>
        <div className='flex'>
          <div className='w-6/12'>
            <div className='flex'>
              <div>
                <Navbar />
              </div>
              <div className='w-full h-screen'>
                <div className='mx-12'>
                  <Search />
                </div>
                <div className='w-full'>
                  <ListItems listText={'Friends'} />

                  <div className='mx-14'>
                    <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'View'} />
                    <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'View'} />
                    <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'View'} />
                    <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'View'} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-6/12 border-l-2 border-gray-300'>
            <div className='flex flex-col justify-between h-full'>
              <div className='mx-12 pt-8 pb-4 border-b-2 border-gray-300'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-4'>
                    <img src={userImg02} alt="userImg02" />
                    <div>
                      <h2 className='font-poppins font-semibold text-xl text-black'>Swathi</h2>
                      <p className='font-poppins font-medium text-sm text-black'>Online</p>
                    </div>
                  </div>
                  <IconButton>
                    <BsThreeDotsVertical className='text-2xl' />
                  </IconButton>
                </div>
              </div>

              <div className='mx-12 w-[85%] h-full bg-gray-500'>
                <div>
                  <ChatText ChatText='Hello' />
                </div>
              </div>

              <div className='border-t-2 border-gray-300'>
                <div className='flex justify-between items-center gap-6 mx-12 pb-10 pt-6'>
                  <div className='w-full flex justify-between gap-4 border-2 py-2 px-6 rounded-full border-gray-300'>
                    <input className='w-full outline-none font-poppins font-medium text-base' type="text" placeholder='write here' />
                    <div className='flex items-center gap-2'>
                      <IconButton>
                        <BiHappy className='text-2xl text-black/90' />
                      </IconButton>
                      <IconButton>
                        <CiCamera className='text-2xl text-black/90' />
                      </IconButton>
                    </div>
                  </div>
                  <div>
                    <IconButton>
                      <li className='list-none'>
                        <BiSend className='text-4xl' />
                      </li>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Messages
