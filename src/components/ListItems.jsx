import { Button, IconButton } from '@mui/material';
import React from 'react'
import userImg01 from '../assets/user-01.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileCard from './ProfileCard';

const ListItems = ({listText}) => {
  return (
    <>
        <div className='p-10'>
            <div className='flex justify-between items-center'>
                <h2 className='font-poppins font-semibold text-xl text-black/90'>{listText}</h2>
                <IconButton sx={{color: 'black'}}>
                    <BsThreeDotsVertical className='text-xl text-black/90' />
                </IconButton>
            </div>
        </div>
    </>
  )
}

export default ListItems
