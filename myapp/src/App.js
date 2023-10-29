import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import Home from './screens/home/home';
import LandingPage from './landingpage';
import HostPage from './hostpage';
import YourKyoo from './yourkyoo';

function App() {
  return (
    <Router>
      <EventProvider>
        <Routes>
          <Route path="/yourkyoo" element={<YourKyoo />} /> 
          <Route path="/hostpage" element={<HostPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </EventProvider>
    </Router>
  );
}

export default App;
