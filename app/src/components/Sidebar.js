import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import GradeIcon from '@mui/icons-material/Grade';

const Sidebar = () => {
  return (
    <div style={{ width: '240px', backgroundColor: '#ffffff', height: '100vh', padding: '20px' }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={Link} to="/courses">
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button component={Link} to="/assignments">
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Assignments" />
        </ListItem>
        <ListItem button component={Link} to="/grades">
          <ListItemIcon><GradeIcon /></ListItemIcon>
          <ListItemText primary="Grades" />
        </ListItem>
        <ListItem button component={Link} to="/files">
          <ListItemIcon><FolderIcon /></ListItemIcon>
          <ListItemText primary="Files" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
