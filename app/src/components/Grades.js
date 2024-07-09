import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Grades = () => {
  const grades = [
    { course: 'CS343 Web Technologies', grade: 'A' },
    { course: 'CE463 Irrigation Engineering', grade: 'B+' },
    { course: 'GIE204 Photogrammetry', grade: 'A-' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Grades
      </Typography>
      <List>
        {grades.map((grade, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${grade.course}: ${grade.grade}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Grades;
