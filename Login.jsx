import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const loginHandler = () => {
    axios.post('http://localhost:3000/log', input)
      .then(res => {
        alert(res.data.message)
        if (res.data.message === "Logged in successfully") {
          // Save user data in localStorage
          localStorage.setItem('user', JSON.stringify({
            email: res.data.email,
            name: res.data.name,
            userType: res.data.userType,
            id: res.data.userId
          }))

          // Redirect based on user type
          if (res.data.userType === "admin") {
            navigate('/admin')
          } else {
            navigate('/user')
          }
        }
      })
      .catch(err => {
        console.error("Login error:", err)
        alert("An error occurred while logging in.")
      })
  }

  return (
    <div align='center'>
      <br /><br />
      <Typography variant='h4' color='primary'>Login</Typography>
      <br /><br />
      <TextField
        variant='outlined'
        label='email'
        name='email'
        value={input.email}
        onChange={handleChange}
      />
      <br /><br />
      <TextField
        variant='outlined'
        type='password'
        label='password'
        name='password'
        value={input.password}
        onChange={handleChange}
      />
      <br /><br />
      <Button variant='contained' onClick={loginHandler}>Login</Button>
    </div>
  )
}

export default Login
