import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography, TextField, Button} from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ( { bodyPart, setBodyPart, setExercises })  => {
  const [search, setSearch] = useState('');

  // fetching exercise categories
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData =  async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();
  }, []);
  


  const handleSearch = async () =>{
    if (search) {
      const exercisesData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
  }

  return (
    <Stack alignItems='center' justifyContent='center' mt='2px' p='10px'>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} textAlign='center' mb='50px'>
        Essential Exercise You <br />
        Can do
      </Typography>    
      <Box position='relative' mb='72px'>
        <TextField 
        height='46px' 
        sx={{ 
          fontWeight: '700', 
          border:'none', 
          borderRadius:'4px', 
          width:{
            lg:'1125px', 
            xs:'350px'}, 
            backgroundColor: '#fff'
          }} 
        type="text"
        value={search}
        placeholder='Search Exercises' 
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        
        <Button className="search-btn" 
        sx={{
          backgroundColor: '#ff2625',
          color: '#fff',
          textTransform: 'none',
          width: {lg: '175px', sm:'80px'},
          fontSize: {lg: '20px',  sm:'14px'},
          height: '56px',
          position: 'absolute',
          right: '0',
        }} onClick={handleSearch}>
          Search</Button>
      </Box>
        <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises