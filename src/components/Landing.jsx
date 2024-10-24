import React from 'react';
import solarTunnel from '../static/vids/217643_small.mp4'
import galaxyFusion from '../static/vids/218490_small.mp4'
import cicleGlalaxy from '../static/vids/170655-843752693_small.mp4'
import BWExplosion from '../static/vids/98191-647151551_small.mp4'
import CookieBanner from './Cookie';
import { Box, Button, Typography } from '@mui/material';

function Landing() {
  return (
    <div className='main'>
        <div className="overlay"></div>
        
        <video src={solarTunnel} autoPlay loop muted />
        <div className="content">
            <h1 className='welcome'>Welcome</h1>
            <p className='welcome'>To Next Generation Product Development</p>
            <Box gap={5} className='Buttonwelcome' display="flex">
                <Button fontSize={16} fontWeight={700} color='white' variant="outlined">
                Sign In
                </Button>
                <Button fontSize={16} fontWeight={700} color='white' variant="outlined">
                Register
                </Button>
                <Button fontSize={16} fontWeight={700} color='white' variant="outlined">
                Discover
                </Button>
              
            </Box>
            <div className='linewelcome'></div>
        </div>
        
        <CookieBanner/>

    </div>
  )
}

export default Landing;
