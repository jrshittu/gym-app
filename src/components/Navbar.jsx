import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/assets/images/logo.jpg';

const Navbar = () => {
  return (
    <Stack>
      <Link>
        <img src={logo} alt='Hey'/>
      </Link>
    </Stack>
  )
}

export default Navbar
