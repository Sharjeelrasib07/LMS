import React, { useState } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { Upload, Download } from '@mui/icons-material';

const CourseDetails = ({ role }) => {
  console.log("CourseDetails role:", role);  // Log the role

  const [materials, setMaterials] = useState([
    {
      week: '29 January - 4 February',
      items: [
        { id: 1, name: 'Web Tech Lab1', type: 'PDF document', role: 'student' },
        { id: 2, name: 'Lec 01 - Introduction', type: 'Powerpoint 2007 presentation', role: 'student' },
        { id: 3, name: 'Lab 1 Submission', type: 'Submission', role: 'student' },
      ],
    },
    {
      week: '5 February - 11 February',
      items: [
        { id: 4, name: 'OFF DUE TO ELECTIONS', type: 'Announcement', role: 'student' },
      ],
    },
  ]);

  const [grades, setGrades] = useState({});

  const handleUpload = (weekIndex, type) => {
    const fileName = prompt(`Enter ${type} name:`);
    if (fileName) {
      const newMaterials = [...materials];
      newMaterials[weekIndex].items.push({ id: Date.now(), name: fileName, type, role: 'instructor' });
      setMaterials(newMaterials);
    }
  };

  const handleDownload = (file) => {
    alert(`Downloading ${file.name}`);
  };

  const handleUploadSubmission = (file) => {
    alert(`Uploading ${file.name}`);
  };

  const handleGradeSubmission = (submissionId) => {
    const grade = prompt("Enter grade:");
    setGrades({ ...grades, [submissionId]: grade });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Course Outline
      </Typography>
      <Typography variant="body1">
        <a href="/path/to/course-outline.docx" download>Course Outline CS-340.docx</a>
      </Typography>
      {materials.map((week, weekIndex) => (
        <div key={weekIndex}>
          <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
            {week.week}
          </Typography>
          <List>
            {week.items.map((item) => (
              <ListItem key={item.id}>
                <ListItemIcon>
                  {item.type === 'PDF document' ? <Download /> : item.type === 'Submission' ? <Upload /> : <Download />}
                </ListItemIcon>
                <ListItemText primary={item.name} secondary={item.type} />
                {role === 'instructor' && item.role === 'student' && (
                  <>
                    <Button variant="contained" color="primary" onClick={() => handleDownload(item)}>
                      Download
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleGradeSubmission(item.id)} style={{ marginLeft: '10px' }}>
                      Grade
                    </Button>
                  </>
                )}
                {role === 'student' && item.role === 'instructor' && (
                  <Button variant="contained" color="primary" onClick={() => handleDownload(item)}>
                    Download
                  </Button>
                )}
                {role === 'student' && item.type === 'Submission' && (
                  <Button variant="contained" color="primary" onClick={() => handleUploadSubmission(item)}>
                    Upload
                  </Button>
                )}
                {role === 'student' && grades[item.id] && (
                  <Typography variant="body2" color="textSecondary" style={{ marginLeft: '10px' }}>
                    Grade: {grades[item.id]}
                  </Typography>
                )}
              </ListItem>
            ))}
          </List>
          {role === 'instructor' && (
            <div>
              <Button variant="contained" color="primary" onClick={() => handleUpload(weekIndex, 'PDF document')}>
                Upload Lecture
              </Button>
              <Button variant="contained" color="primary" onClick={() => handleUpload(weekIndex, 'Submission')} style={{ marginLeft: '10px' }}>
                Upload Assignment
              </Button>
            </div>
          )}
          <Divider />
        </div>
      ))}
    </Container>
  );
};

export default CourseDetails;
