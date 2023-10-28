import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Player from '../player/player';
import Trending from '../trending/trending';
import Sidebar from '../../components';
import './home.css';

export default function Home() {
  return (
    <Router>
      <div className ="main-body">
       <Sidebar />
       <Routes>
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorites />} />
       </Routes>
      </div>
    </Router>
  );
}
