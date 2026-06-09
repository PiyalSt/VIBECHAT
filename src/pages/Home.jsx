import React from 'react'
import Navbar from '../components/Navbar'
import { FiSearch } from "react-icons/fi";
import { Button, IconButton } from '@mui/material';
import { BsThreeDotsVertical } from "react-icons/bs";
import ListItems from '../components/ListItems';


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
              <div className=' w-full flex justify-center py-8'>
                <div className='w-120 flex justify-between items-center gap-4 py-3 px-5 border-2 shadow-xl rounded-2xl'>
                  <input className='w-full outline-none font-poppins font-medium text-black/60' type="text" placeholder='Search' />
                  <IconButton sx={{color: 'gray'}}>
                    <FiSearch className='text-2xl text-gray-800' />
                  </IconButton>
                </div>
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
              <ListItems />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
