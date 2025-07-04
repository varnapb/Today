import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const AdminNavBar = () => {
  return (
    <div>
          <AppBar sx={{ background: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)' }}>
        <Toolbar>
            <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}> Admin</Typography>
            
           
        </Toolbar>
      </AppBar><br></br>
    </div>
  )
}

export default AdminNavBar
