import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');

  const handleAddCourse = () => {
    // Mock add course function
    alert(`Course ${courseName} added successfully!`);
    setCourseName('');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Add Course
      </Typography>
      <TextField
        label="Course Name"
        fullWidth
        margin="normal"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleAddCourse}>
        Add Course
      </Button>
    </Container>
  );
};

export default AddCourse;
