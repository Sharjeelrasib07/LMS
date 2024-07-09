import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const AssignmentList = () => {
  const assignments = [
    { id: 1, name: 'Assignment 1' },
    { id: 2, name: 'Assignment 2' },
    { id: 3, name: 'Assignment 3' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Assignments
      </Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }} component={Link} to="/add-assignment">
        Add Assignment
      </Button>
      <List>
        {assignments.map((assignment) => (
          <ListItem key={assignment.id}>
            <ListItemText primary={assignment.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AssignmentList;
