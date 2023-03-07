import React from 'react'
import { AppBar, Toolbar, Typography,Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './style.css'
const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='warning'>
        <Toolbar>
            <Typography variant='h6' sx={{ my: 2 }} color="palette.warning.light">Movie Management</Typography>
            <div className='navigation'>
            <Link to="/" className='links'><Button>Movies</Button></Link>
            <Link to="/addmovie" className='links'><Button>ADD</Button></Link>
            <Link to="/searchmovie" className='links'><Button>Search</Button></Link>
            <Link to='/about' className='links'><Button>About</Button></Link>
            </div>
        </Toolbar>
      </AppBar>
      </Box>
    </div>
  )
}

export default Header
