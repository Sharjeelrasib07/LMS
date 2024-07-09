import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Register from './components/Register';
import CourseList from './components/CourseList';
import AddCourse from './components/AddCourse';
import AssignmentList from './components/AssignmentList';
import AddAssignment from './components/AddAssignment';
import CourseDetails from './components/CourseDetails';
import Grades from './components/Grades';
import './index.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  const handleLogin = () => {
    const userRole = localStorage.getItem('role');
    console.log("User role:", userRole);  // Log the role
    setRole(userRole);
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/courses" element={<MainLayout><CourseList /></MainLayout>} />
            <Route path="/courses/:courseId" element={<MainLayout><CourseDetails role={role} /></MainLayout>} />
            {role === 'instructor' && <Route path="/add-course" element={<MainLayout><AddCourse /></MainLayout>} />}
            <Route path="/assignments" element={<MainLayout><AssignmentList /></MainLayout>} />
            {role === 'instructor' && <Route path="/add-assignment" element={<MainLayout><AddAssignment /></MainLayout>} />}
            <Route path="/grades" element={<MainLayout><Grades /></MainLayout>} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
