import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/assets/icons/gym.png';

const BodyPart = (item, setBodyPart, bodyPart) => {
  return (
    <Stack type='button' alignItems= 'center' justifyContent='center' className='bodyPart-card'
        sx={bodyPart === item ? {
            borderTop: "4px solid #ff2625", backgroundColor: "#fff",
            width: "270px", borderBottomLeftRadius: "20px",
            height: "280px",
            cursor: "pointer",
            gap: "47px" 
        
        } : {
            background: '#fff',    
        } 
    }
    >
      <img src={Icon} />
    </Stack>
  )
}

export default BodyPart
