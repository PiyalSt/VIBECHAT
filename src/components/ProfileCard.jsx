import React from 'react'
import { userDummyData } from '../assets/assets'

const ProfileCard = () => {
  return (
    <>
        <div className='flex flex-col gap-4'>
            {
                userDummyData.map((user, index)=>(
                    <div key={index} className='py-2 px-4 hover:bg-slate-800/60 cursor-pointer rounded-lg'>
                        <div className='flex items-center gap-4'>
                            <div>
                                <img className='w-14 rounded-full' src={user.profilePic} alt="" />
                            </div>
                            <div className='mb-2'>
                                <h4 className='font-nunito font-normal text-lg text-secondText'>{user.fullName}</h4>
                                <p className='font-nunito font-normal text-xs text-secondText/50'>{user.bio}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default ProfileCard
