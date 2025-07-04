import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const UserNavBar = () => {
  return (
    <div>
        <AppBar sx={{ background: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)' }}>
        <Toolbar>
            <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}> User</Typography>
            <Link to='/log'>
                <Button variant='contained' color='secondary'>Login</Button>
            </Link> 
            &nbsp;
            <Link to='/'>
                <Button variant='contained' color='secondary'>View</Button>
            </Link> 
            &nbsp;
           
        </Toolbar>
      </AppBar><br></br>
    </div>
  )
}

export default UserNavBar
