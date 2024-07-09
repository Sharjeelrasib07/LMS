import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <main style={{ padding: '20px', marginTop: '64px' }}>
          <Container maxWidth="lg">
            {children}
          </Container>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
