import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome, Sharjeel
      </Typography>
      <Typography variant="h6" gutterBottom>
        Recently accessed courses
      </Typography>
      <div className="card-container">
        <Card className="MuiCard-root">
          <CardContent>
            <Typography variant="body2">CS343 Web Technologies</Typography>
          </CardContent>
        </Card>
        <Card className="MuiCard-root">
          <CardContent>
            <Typography variant="body2">CE463 Irrigation Engineering</Typography>
          </CardContent>
        </Card>
        <Card className="MuiCard-root">
          <CardContent>
            <Typography variant="body2">GIE204 Photogrammetry</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
