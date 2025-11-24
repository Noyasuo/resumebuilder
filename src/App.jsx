import React, { useState } from 'react';
import { ResumeProvider } from './context/ResumeContext';
import Home from './pages/Home';
import Landing from './pages/Landing';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <ResumeProvider>
      {currentPage === 'home' ? (
        <Home onNavigate={setCurrentPage} />
      ) : (
        <Landing onNavigate={setCurrentPage} />
      )}
    </ResumeProvider>
  );
}

export default App;
