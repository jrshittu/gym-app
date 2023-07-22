import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/assets/images/logo.jpg';

const Navbar = () => {
  return (
    <Stack>
      <Link>
        <img src={logo} alt='Hey' style={{width: '48px', height: '48px', margin: '0 20px'}}/>
      </Link>
      <stack>
        <Link to='/' style={{textDecoration: 'none', color:'#3A1212', borderBottom:'3px solid #ff2625', display:'block', width:'40px'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#ce5dfe'}}>Exercises</a>
      </stack>
    </Stack>
  )
}

export default Navbar
