import React, { useState, useEffect } from 'react';
import { Stack, TextField, Button, Box, Typography } from '@mui/material';

function SearchExercises() {
  return (
    <Stack alignItems='center' justifyContent='center' mt='17px' p='10px'>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} textAlign='center' mb='50px'>
        Essential Exercise You <br />
        Can do
      </Typography>    
      <Box position='relative' mb='72px'>
        <TextField height='46px' sx={{ fontWeight: '700', border:'none', borderRadius:'4px', width:{lg:'1125px', xs:'350px'}, backgroundColor: '#fff', borderRadius: '40px'}} type="text"
        placeholder='Search Exercises' />
        <Button className='search-btn' sx={{backgroundColor: '#ff2625', position: 'absolute', right: '0px', color:'#fff', textTransform:'none', width:{lg: '170px', xs:'80px'}, height:'56px', fontSize: {lg: '20px', xs:'14px'}, border: '1px solid #fff'}}>
          Search
        </Button>
      </Box>
      
      </Stack>
  )
}

export default SearchExercises;
