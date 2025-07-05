import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import User from './components/User'
import Admin from './components/Admin'
import AdminNavBar from './components/AdminNavBar'
import UserNavBar from './components/UserNavBar'

function App() {
  const [count, setCount] = useState(0)
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      
      {user ? (
        user.userType === "admin" ? <AdminNavBar/> : <UserNavBar />
      ) : (
        <Navbar />
      )}

      
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/add' element={<Add />} />
        <Route path='/log' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
        <Route path='/user' element={<User />} />
        <Route path='/admin' element={<Admin />} />
        {/* <Route path='/userbar' element={<UserNavBar />} />
        <Route path='/adminbar' element={<AdminNavBar />} /> */}
      </Routes>
    </>
  )
}

export default App
