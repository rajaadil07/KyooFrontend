import React from 'react'
import Home from './screens/home'
import SupportScreen from "./SupportScreen"
import 'bootstrap/dist/css/bootstrap.min.css'; 


import YourKyoo from './yourkyoo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/yourkyoo" element={<YourKyoo/>} /> 
        <Route path="/hostpage" element={<HostPage />} />
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
