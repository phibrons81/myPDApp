import React from 'react';
import solarTunnel from '../static/vids/217643_small.mp4'
import galaxyFusion from '../static/vids/218490_small.mp4'
import cicleGlalaxy from '../static/vids/170655-843752693_small.mp4'
import BWExplosion from '../static/vids/98191-647151551_small.mp4'
import CookieBanner from './Cookie';
import { Box, Button, Typography } from '@mui/material';

function Home() {
  return (
    <div className='main'>
        <div className="overlay"></div>
        
        <video src={solarTunnel} autoPlay loop muted />
        <div className="content">
            <h1 className='welcome'>Welcome</h1>
            <p className='welcome'>To next Generation Product Development</p>
            <Box className='Buttonwelcome' display="flex">
                <Typography fontSize={16} fontWeight={700} color='white'>
                Enter Next Gen Product Development
                </Typography>
            </Box>
        </div>
        
        <CookieBanner/>

    </div>
  )
}

export default Home;
