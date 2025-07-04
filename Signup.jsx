import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  var [sub, setSub] = useState({ name: '', email: '', password: '', phone: '' })
  var navigate = useNavigate()

  const submitHandler = (e) => {
    setSub({ ...sub, [e.target.name]: e.target.value })
    // console.log(input)
  }

  const handleSubmit = () => {
    axios.post('http://localhost:3000/signup', sub)
      .then(res => {
        alert(res.data.message)
        console.log(res.data.message)
        
      })
      .catch(err => {
        console.error(err)
        alert('Signup failed. Please try again.')
      })
  }

  return (
    <div align='center'>
      <br /><br />
      <Typography variant='h4' color='primary'>SignUp</Typography>
      <br /><br />
      <TextField
        variant='outlined'
        label='name'
        name='name'
        value={sub.name}
        onChange={submitHandler}
      />
      <br /><br />
      <TextField
        variant='outlined'
        label='email'
        name='email'
        value={sub.email}
        onChange={submitHandler}
      />
      <br /><br />
      <TextField
        variant='outlined'
        type='password'
        label='password'
        name='password'
        value={sub.password}
        onChange={submitHandler}
      />
      <br /><br />
      <TextField
        variant='outlined'
        label='phone'
        name='phone'
        value={sub.phone}
        onChange={submitHandler}
      />
      <br /><br />
      <Button variant='contained' onClick={handleSubmit}>SignUp</Button>
    </div>
  )
}

export default Signup
