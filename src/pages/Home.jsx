import React from 'react'
import Navbar from '../components/Navbar'
import { FiSearch } from "react-icons/fi";
import { Button, IconButton } from '@mui/material';
import { BsThreeDotsVertical } from "react-icons/bs";
import ListItems from '../components/ListItems';
import Search from '../components/Search';
import ProfileCard from '../components/ProfileCard';
import userImg01 from '../assets/user-01.png'


const Home = () => {
  return (
    <>
      <section id='home-page'>
        <div className='w-full flex'>
          <div className='w-6/12 flex'>
            <div>
              <Navbar />
            </div>
            <div className='w-full'>
              <div className='mx-12'>
                <Search />
              </div>

              <div className=' py-10 px-8 mx-6 shadow'>
                <div>
                  <div className='border-b-2 border-gray-300'>
                    <div className='flex items-center justify-between mb-4'>
                      <h2 className='font-nunito font-bold text-2xl text-black/80'>Items List</h2>
                      <IconButton>
                        <BsThreeDotsVertical className='text-2xl text-black/80' />
                      </IconButton>
                    </div>
                  </div>

                  <div className='my-10'>
                    <Button sx={{width: '100%', padding: '16px 0', color: '#000', borderBottom: '2px solid gray'}}>
                      <li className='font-poppins font-semibold text-lg list-none'>
                        Group List
                      </li>
                    </Button>
                    <Button sx={{width: '100%', padding: '16px 0', color: '#000', borderBottom: '2px solid gray' }}>
                      <li className='font-poppins font-semibold text-lg list-none'>
                        Friends List
                      </li>
                    </Button>
                    <Button sx={{width: '100%', padding: '16px 0', color: '#000', borderBottom: '2px solid gray'}}>
                      <li className='font-poppins font-semibold text-lg list-none'>
                        User List
                      </li>
                    </Button>
                    <Button sx={{width: '100%', padding: '16px 0', color: '#000', borderBottom: '2px solid gray'}}>
                      <li className='font-poppins font-semibold text-lg list-none'>
                        Friend  Request
                      </li>
                    </Button>
                    <Button sx={{width: '100%', padding: '16px 0', color: '#000', borderBottom: '2px solid gray'}}>
                      <li className='font-poppins font-semibold text-lg list-none'>
                        My Groups
                      </li>
                    </Button>
                    <Button sx={{width: '100%', padding: '16px 0', color: '#000', borderBottom: '2px solid gray'}}>
                      <li className='font-poppins font-semibold text-lg list-none'>
                        Blocked Users
                      </li>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-6/12'>
            <div className='w-full '>
              <ListItems listText={'User List'} />
              <div className='mx-14'>
                <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'Join'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
