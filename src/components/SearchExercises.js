import React, { useState, useEffect } from 'react';
import { Stack, TextField, Button, Box, Typography } from '@mui/material';

function SearchExercises() {
  return (
    <Stack alignItems='center' justifyContent='center' mt='17px' p='10px'>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} textAlign='center' mb='50px'>
        Essential Exercise You <br />
        Can do
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" >
            Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises;
