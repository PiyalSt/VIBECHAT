import React from 'react'
import { IoNotificationsSharp } from "react-icons/io5";

const NotificationText = ({notiText}) => {
  return (
    <>
        <div className='flex items-center gap-4 border-b-2 border-gray-300'>
            <div className='mb-4'>
                <IoNotificationsSharp className="text-3xl text-black/85" />
            </div>
            <div className='mb-4'>
              <p className='font-poppins font-medium text-base text-black/85'>{notiText}</p>
            </div>
        </div> 
    </>
  )
}

export default NotificationText
