import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    var navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('user')
        navigate("/log")
    }

  return (
    <div>
      <center>
      <h1>User</h1>
      <h3>Name : {user.name}</h3>
      <h4>Email : {user.email}</h4>
      <Button variant='contained' onClick={handleLogout}>Logout</Button>
      </center>
    </div>
  )
}

export default User
