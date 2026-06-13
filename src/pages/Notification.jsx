import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import NotificationText from '../components/NotificationText'

const Notification = () => {
  return (
    <>
      <section>
        <div className='flex'>
          <div>
            <Navbar />
          </div>
          <div className='w-full h-screen overflow-y-scroll bg-darkGray border-l border-secondText/50'>
            <div className='m-6'>
              <Search />
            </div>
            <div className='mx-6 py-4 flex flex-col gap-8'>
              <NotificationText notiText={'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'} />
              <NotificationText notiText={'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'} />
              <NotificationText notiText={'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'} />
              <NotificationText notiText={'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'} />
              <NotificationText notiText={'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'} />
              <NotificationText notiText={'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'} />
              <NotificationText notiText={'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'} />
              <NotificationText notiText={'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Notification
