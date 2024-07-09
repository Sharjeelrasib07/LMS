import React from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const courses = [
    { id: 1, name: 'CS343 Web Technologies' },
    { id: 2, name: 'CE463 Irrigation Engineering' },
    { id: 3, name: 'GIE204 Photogrammetry' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }} component={Link} to="/add-course">
        Add Course
      </Button>
      <List>
        {courses.map((course) => (
          <ListItem key={course.id} button component={Link} to={`/courses/${course.id}`}>
            <MuiLink component="span" style={{ textDecoration: 'none' }}>
              <ListItemText primary={course.name} />
            </MuiLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CourseList;
