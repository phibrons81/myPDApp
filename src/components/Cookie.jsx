import React, { useState } from 'react';
import { Snackbar, Button, Box, Typography, Paper } from '@mui/material';

function CookieBanner() {
  const [open, setOpen] = useState(true);

  const handleAccept = () => {
    // Logik für das Akzeptieren von Cookies (z.B. speichern in localStorage)
    localStorage.setItem('cookiesAccepted', 'true');
    setOpen(false);
  };

  const handleDecline = () => {
    // Logik für das Ablehnen von Cookies (z.B. nicht speichern)
    setOpen(false);
  };

  const handleManage = () => {
    // Logik für das Ablehnen von Cookies (z.B. nicht speichern)
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{ bottom: 0 }}
    >
      <Paper style={{backgroundColor:'hsla(211, 39.90%, 37.80%, 0.51)',}} elevation={5} sx={{ padding: 2, maxWidth: 700, width: '100%' }} >
        <Box  display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
          <Typography color='white' variant="body1" textAlign={'center'}sx={{ flexGrow: 5 }}>
          But first, cookies 🍪 This website uses Cookies to serve you with the best experience!
          </Typography>
          <Box ml={5} display="flex" gap={5} padding={1} >
            <Button variant="outlined" color="info" onClick={handleAccept}>
              Accept all Cookies
            </Button>
            <Button variant="outlined" color="info" onClick={handleDecline}>
              Reject all Cookies
            </Button>
            <Button variant="outlined" color="info" onClick={handleManage}>
              Manage Cookies
            </Button>
          </Box>
        </Box>
      </Paper>
    </Snackbar>
  );
}

export default CookieBanner;
