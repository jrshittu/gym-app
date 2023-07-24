import React, { useState, useEffect } from 'react';
import { Stack, TextField, Button, Box, Typography } from '@mui/material';

function SearchExercises() {
  return (
    <Stack alignItems='center' justifyContent='center' mt='17px' p='10px'>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} textAlign='center' mb='50px'>
        Essential Exercise You <br />
        Can do
      </Typography>
    </Stack>
  )
}

export default SearchExercises;
