import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <ResumeProvider>
      <Home />
    </ResumeProvider>
  );
}

export default App;
