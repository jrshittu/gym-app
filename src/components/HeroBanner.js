import React from 'react';
import {Box, Button, Stack, Typography} from '@mui/material';
import banner from '../assets/assets/images/banner.png';


function HeroBanner() {
  return (
    <Box sx={{mt: {lg:'160px', xs:'70px'},
    ml: {sm: '50px'} 
    }} position='relative' p='20px'>
      <Typography color='#ff2625' fontWeight='700' fontSize='26px'>
        FitFlex Club
      </Typography>
      <Typography fontWeight='700' sx={{fontSize: {lg:'44px', xs:'40px'}
    }}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography lineHeight='35px' fontSize='26px' mb={3}>
        Check out the most effective Exercise
      </Typography>
      <Button variant='contained' color='error' href='#exercises'>Find a suitable Exercise</Button>
      <Typography
         fontWeight={600} color='#ff2625' fontSize='200px' mt='12px' mb='40px'
         sx={{opacity: 0.1, display: { lg: "block", xs:"none"}
         
        }}
      >
        FitFlex
      </Typography>
      <img src={banner} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
