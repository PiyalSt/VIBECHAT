import { Button, IconButton } from '@mui/material';
import React from 'react'
import userImg01 from '../assets/user-01.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileCard from './ProfileCard';

const ListItems = () => {
  return (
    <>
        <div className='p-10'>
            <div className='flex justify-between items-center'>
                <h2 className='font-poppins font-semibold text-xl text-black/90'>Group list</h2>
                <IconButton sx={{color: 'black'}}>
                    <BsThreeDotsVertical className='text-xl text-black/90' />
                </IconButton>
            </div>
            <div>
                <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'Join'} />
                <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'Join'} />
                <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'Join'} />
                <ProfileCard profileImg={userImg01} profileAlt={'userImg01'} userName={'Friends Reunion'} userMessage={'Hi Guys, Wassup!'} btnText={'Join'} />
            </div>
        </div>
    </>
  )
}

export default ListItems
