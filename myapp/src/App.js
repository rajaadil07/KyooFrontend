import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landingpage';
import HostPage from './hostpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hostpage" element={<HostPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

