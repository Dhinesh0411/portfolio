import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<EmailIcon />}
              href="mailto:your.email@example.com"
            >
              Email
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{ color: 'white', borderColor: 'white' }}
              startIcon={<GitHubIcon />}
              href="https://github.com/Dhinesh0411"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{ color: 'white', borderColor: 'white' }}
              startIcon={<LinkedInIcon />}
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;