import React from 'react'

const ProfileCard = ({profileImg, profileAlt, userName, userMessage, btnText}) => {
  return (
    <>
        <div>
            <div className='mt-2 border-b-2 border-gray-400'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center gap-4'>
                        <img src={profileImg} alt={profileAlt} />
                        <div>
                            <h4 className='font-poppins font-semibold text-lg text-black'>{userName}</h4>
                            <p className='font-poppins font-medium text-sm text-gray-800/60'>{userMessage}</p>
                        </div>
                    </div>
                    <div>
                        <button className='py-2 px-6 bg-primary text-white font-poppins font-medium text-sm rounded-full cursor-pointer'>{btnText}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileCard
