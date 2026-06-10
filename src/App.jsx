import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Messages from './pages/Messages'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='registration' element={<Registration />} />
          <Route path='login' element={<Login />} />
          <Route path='messages' element={<Messages />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
