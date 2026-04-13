import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        pt: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Hello, I'm Dhinesh
        </Typography>
        <Typography variant="h5" paragraph>
          I'm a passionate developer specializing in React and modern web technologies. Welcome to my portfolio showcasing my GitHub projects.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="#projects"
          sx={{ mt: 2 }}
        >
          View My Projects
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;