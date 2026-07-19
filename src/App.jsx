import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Messages from './pages/Messages'
import Notification from './pages/Notification'
import Settings from './pages/Settings'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='registration' element={<Registration />} />
          <Route path='messages' element={<Messages />} />
          <Route path='notification' element={<Notification />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
