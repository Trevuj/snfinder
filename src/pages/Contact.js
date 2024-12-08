import React from 'react';
import { Container, Typography, Box, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';

const SocialIcon = styled.a`
  font-size: 2.5rem;
  margin: 0 15px;
  color: #FF6B6B;
  transition: all 0.3s ease;

  &:hover {
    color: #FF8E53;
    transform: scale(1.2) rotate(5deg);
    animation: bounce 0.5s ease infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(1.2) translateY(0);
    }
    50% {
      transform: scale(1.2) translateY(-10px);
    }
  }
`;

const Contact = () => {
  const socialLinks = [
    { 
      icon: <FacebookIcon />, 
      url: 'https://www.facebook.com/groups/877637010112660',
      label: 'Facebook Group'
    },
    { 
      icon: <FacebookIcon />, 
      url: 'https://www.facebook.com/FarhanRana.M',
      label: 'Facebook Profile'
    },
    { 
      icon: <TwitterIcon />, 
      url: '404.html',
      label: 'Twitter'
    },
    { 
      icon: <InstagramIcon />, 
      url: '404.html',
      label: 'Instagram'
    }
  ];

  return (
    <Container>
      <Box sx={{ minHeight: '100vh', pt: 10, pb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" gutterBottom>
          Connect with us on social media
        </Typography>
        <Stack 
          direction="row" 
          spacing={2} 
          justifyContent="center" 
          sx={{ mt: 4 }}
        >
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                color="primary"
                component="a"
                aria-label={social.label}
                size="large"
              >
                {social.icon}
              </IconButton>
            </SocialIcon>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Contact; 