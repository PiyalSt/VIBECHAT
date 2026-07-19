import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FiSearch } from "react-icons/fi";
import { Button, IconButton } from '@mui/material';
import { BsThreeDotsVertical } from "react-icons/bs";
import Search from '../components/Search';
import ProfileCard from '../components/ProfileCard';
import assets from '../assets/assets';
import ListContainer from '../components/ListContainer';
import UserList from '../listpages/UserList';


const Home = () => {

  const [list, setList] = useState('Group List');
  

  return (
    <>
      <section id='home-page'>
        <div className='w-full flex'>
          <div className='w-6/12 flex'>
            <div>
              <Navbar />
            </div>
            <div className='w-full border-l border-secondText/50 bg-darkGray'>

              <div className='mx-6'>
                <div className='my-6'>
                  <Search />
                </div>

                <div>
                  <ListContainer listName={'List Items'} />
                </div>

                <div className="w-full max-h-134 flex-1 overflow-y-scroll hide-scrollbar relative">
                  <div className='flex flex-col gap-2 mt-10 bg-slate-700/10 p-6 rounded-lg'>
                    <Button onClick={()=> setList('Group List')}
                     sx={{width: '100%', padding: '16px 0', color: '#C8BCF6'}}>
                      <li className='font-nunito font-medium text-lg list-none'>
                        Group List
                      </li>
                    </Button>
                    <Button onClick={()=> setList('Friends List')}
                     sx={{width: '100%', padding: '16px 0', color: '#C8BCF6'}}>
                      <li className='font-nunito font-medium text-lg list-none'>
                        Friends List
                      </li>
                    </Button>
                    <Button onClick={()=> setList('User List')}
                     sx={{width: '100%', padding: '16px 0', color: '#C8BCF6'}}>
                      <li className='font-nunito font-medium text-lg list-none'>
                        User List
                      </li>
                    </Button>
                    <Button onClick={()=> setList('Friend  Request')}
                     sx={{width: '100%', padding: '16px 0', color: '#C8BCF6'}}>
                      <li className='font-nunito font-medium text-lg list-none'>
                        Friend  Request
                      </li>
                    </Button>
                    <Button onClick={()=> setList('My Groups')}
                     sx={{width: '100%', padding: '16px 0', color: '#C8BCF6'}}>
                      <li className='font-nunito font-medium text-lg list-none'>
                        My Groups
                      </li>
                    </Button>
                    <Button onClick={()=> setList('Blocked Users')}
                     sx={{width: '100%', padding: '16px 0', color: '#C8BCF6'}}>
                      <li className='font-nunito font-medium text-lg list-none'>
                        Blocked Users
                      </li>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-6/12 bg-darkGray border-l border-secondText/50'>
            <div className='w-full'>
              <div className='m-6'>
                <ListContainer listName={list} />
              </div>
              <div className='mx-6'>
                {/* <ProfileCard /> */}
                <UserList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
