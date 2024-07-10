import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReferModal from './components/ReferModal';
import './App.css';
import Home from './Home';

const theme = createTheme();

function App() {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home handleOpenModal={handleOpen} />} />
        <Route path='/refer-form' element={<ReferModal open={open} handleClose={handleClose} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
