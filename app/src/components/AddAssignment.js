import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddAssignment = () => {
  const [assignmentName, setAssignmentName] = useState('');

  const handleAddAssignment = () => {
    // Mock add assignment function
    alert(`Assignment ${assignmentName} added successfully!`);
    setAssignmentName('');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Add Assignment
      </Typography>
      <TextField
        label="Assignment Name"
        fullWidth
        margin="normal"
        value={assignmentName}
        onChange={(e) => setAssignmentName(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleAddAssignment}>
        Add Assignment
      </Button>
    </Container>
  );
};

export default AddAssignment;
