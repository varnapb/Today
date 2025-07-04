import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const admin = JSON.parse(localStorage.getItem('admin'));
    var navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('user')
        navigate("/log")
    }

  return (
    <div>
      <h1>Admin</h1>
      <h3>Name : {user.name}</h3>
      <h4>Email : {user.email}</h4>
      <Button variant='contained' onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Admin
