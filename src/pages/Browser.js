import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Browser = () => {
  const browsers = [
    { name: 'AdsPower', url: 'https://www.adspower.com/' },
    { name: 'Incognition', url: 'https://incogniton.com/' },
    { name: 'MoreLogin', url: 'https://www.morelogin.com/' },
    { name: 'ClonBrowser', url: 'https://www.clonbrowser.com/' },
    { name: 'GoLogin', url: 'https://gologin.com/' },
    { name: 'Dolphin{anty}', url: 'https://dolphin-anty.com/' }
  ];

  return (
    <Container>
      <Box sx={{ minHeight: '100vh', pt: 10, pb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Browser Tools
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h5" gutterBottom>
            Enhance your browsing experience with these powerful tools
          </Typography>
        </motion.div>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {browsers.map((browser, index) => (
            <Grid item xs={12} sm={6} md={4} key={browser.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Paper 
                  sx={{ 
                    p: 4,
                    background: 'rgba(75, 0, 130, 0.4)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(147, 112, 219, 0.3)',
                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                    borderRadius: '20px',
                    textAlign: 'center',
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(147, 112, 219, 0.37)',
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: '#E6E6FA' }}>
                    {browser.name}
                  </Typography>
                  <Button 
                    variant="contained" 
                    href={browser.url}
                    target="_blank"
                    sx={{ 
                      background: 'linear-gradient(45deg, #9370DB 30%, #8A2BE2 90%)',
                      color: 'white',
                      padding: '10px 20px',
                      fontSize: '1rem',
                      textTransform: 'none',
                      borderRadius: '10px',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #8A2BE2 30%, #9370DB 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(147, 112, 219, 0.4)',
                      },
                    }}
                  >
                    Visit {browser.name}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Browser; 