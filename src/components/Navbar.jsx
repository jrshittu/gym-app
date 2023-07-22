import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/assets/images/logo.jpg';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='none' px='20px' sx={{gap: {
      sm: '122px', xs: '40px'
    }, mt: { sm: '32px', xs: '22px'
    }
    }}>
      <Link>
        <img src={logo} alt='fitflex logo' style={{width: '80px', height: '70px', margin: '0 20px'}}/>
      </Link>
      <Stack direction='row' gap='30px' fontSize='22px' alignItems='flex-end'>
        <Link to='/' style={{textDecoration: 'none', color:'#3A1212', borderBottom:'3px solid #ff2625',}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212', borderBottom:'3px solid #ff2625'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
