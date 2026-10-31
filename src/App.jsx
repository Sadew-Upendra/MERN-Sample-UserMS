import './App.css';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <Box className="hero">
      <Box className="hero-header">
        <Box className="hero-card">
          <Typography variant="overline" className="eyebrow">
            User Management System
          </Typography>
          <Typography variant="h2" className="hero-title">
            Welcome to User MS
          </Typography>
          <Typography variant="body1" className="hero-subtitle">
            Manage users with a clean, simple dashboard experience.
          </Typography>
          <Button
            className="user-button"
            variant="contained"
            size="large"
            onClick={() => navigate('/users')}
          >
            Open Users
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
