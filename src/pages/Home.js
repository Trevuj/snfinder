import React, { useState } from 'react';
import { 
    Container, 
    Typography, 
    Paper, 
    TextField, 
    Button, 
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    CircularProgress,
    Alert
} from '@mui/material';
import { generateRandomPerson } from '../services/dataService';
import { motion } from 'framer-motion';
import FloatingSphere from '../components/FloatingSphere';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px; // Space between buttons
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background: linear-gradient(45deg, #FF6B6B, #FF8E53);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const formatDate = (dateString) => {
  const match = dateString.match(/\((.*?)\)/);
  if (!match) return dateString;
  
  const date = new Date(match[1]);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).replace(/(\d+)/, '$1th'); // Add 'th' suffix to the day
};

const Home = () => {
    const [formData, setFormData] = useState({
        age: '',
        country: ''
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const person = await generateRandomPerson(formData.age, formData.country);
            setResult(person);
            setOpenDialog(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setResult(null);
    };

    return (
        <Container>
            <Box sx={{ minHeight: '100vh', pt: 10, pb: 4 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        As-Salamu Alaikum
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Typography variant="h5" gutterBottom>
                        Discover insights through our innovative surveys
                    </Typography>
                </motion.div>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '10%' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ width: '100%', maxWidth: 500 }}
                    >
                        <Paper
                            component="form"
                            onSubmit={handleSubmit}
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
                            <TextField
                                fullWidth
                                label="Age"
                                type="number"
                                margin="normal"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(147, 112, 219, 0.5)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(147, 112, 219, 0.8)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#9370DB',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'rgba(147, 112, 219, 0.8)',
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                select
                                label="Country"
                                margin="normal"
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                required
                                SelectProps={{
                                    native: true,
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(147, 112, 219, 0.5)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(147, 112, 219, 0.8)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#9370DB',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'rgba(147, 112, 219, 0.8)',
                                    },
                                }}
                            >
                                <option value="">Select a country</option>
                                <option value="us">USA</option>
                                <option value="ca">Canada</option>
                                <option value="gb">UK</option>
                            </TextField>
                            <ButtonContainer>
                                <StyledButton onClick={() => window.open('https://forms.gle/3m8veagMgjZnKUCS8', '_blank')}>
                                    Dollar Exchange
                                </StyledButton>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth 
                                    sx={{ 
                                        mt: 3,
                                        background: 'linear-gradient(45deg, #9370DB 30%, #8A2BE2 90%)',
                                        color: 'white',
                                        padding: '12px',
                                        fontSize: '1.1rem',
                                        textTransform: 'none',
                                        borderRadius: '10px',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #8A2BE2 30%, #9370DB 90%)',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 20px rgba(147, 112, 219, 0.4)',
                                        },
                                    }}
                                    disabled={loading}
                                >
                                    {loading ? <CircularProgress size={24} /> : 'Generate Random Person'}
                                </Button>
                            </ButtonContainer>
                            
                            {loading && (
                                <Typography 
                                    sx={{ 
                                        mt: 2, 
                                        textAlign: 'center', 
                                        color: '#E6E6FA',
                                        fontStyle: 'italic',
                                        opacity: 0.8
                                    }}
                                >
                                    Hold on you Human! Ghost is coming with the best result for you...
                                </Typography>
                            )}
                        </Paper>
                    </motion.div>
                </Box>

                <Dialog 
                    open={openDialog} 
                    onClose={handleCloseDialog}
                    PaperProps={{
                        sx: {
                            background: 'rgba(75, 0, 130, 0.9)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(147, 112, 219, 0.3)',
                            borderRadius: '20px',
                            padding: '20px',
                        }
                    }}
                >
                    <DialogTitle sx={{ color: '#E6E6FA' }}>Generated Person</DialogTitle>
                    <DialogContent>
                        {result && (
                            <DialogContentText component="div" sx={{ color: '#E6E6FA' }}>
                                <Typography sx={{ mb: 1 }}><strong>Name:</strong> {result.name}</Typography>
                                <Typography sx={{ mb: 1 }}><strong>Age:</strong> {result.age.split(' ')[0]} ({formatDate(result.age)})</Typography>
                                <Typography sx={{ mb: 1 }}><strong>Country:</strong> {result.country}</Typography>
                                <Typography sx={{ mb: 1 }}><strong>Address:</strong> {result.address}</Typography>
                                <Typography sx={{ mb: 1 }}><strong>City:</strong> {result.city}</Typography>
                                <Typography sx={{ mb: 1 }}><strong>State:</strong> {result.state}</Typography>
                                <Typography><strong>ZIP Code:</strong> {result.zip}</Typography>
                            </DialogContentText>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={handleCloseDialog}
                            sx={{
                                color: '#E6E6FA',
                                '&:hover': {
                                    background: 'rgba(147, 112, 219, 0.2)',
                                }
                            }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
};

export default Home; 