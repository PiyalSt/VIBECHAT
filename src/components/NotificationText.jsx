import React from 'react'
import { IoNotificationsSharp } from "react-icons/io5";

const NotificationText = ({notiText}) => {
  return (
    <>
        <div className='flex items-center gap-4 p-4 border-b border-secondText/50 hover:bg-secondText/10 rounded-sm cursor-pointer group'>
            <div>
                <IoNotificationsSharp className="text-3xl text-secondText/80" />
            </div>
            <div>
              <p className='font-nunito font-medium text-base text-secondText/80 group-hover:text-secondText'>{notiText}</p>
            </div>
        </div> 
    </>
  )
}

export default NotificationText
