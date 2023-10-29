import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Player from '../player/player';
import Trending from '../trending/trending';
import Sidebar from '../../components';
import './home.css';

export default function Home() {
  return (
    <div className="main-body">
      <Sidebar />
      <Routes>
        <Route path="trending" element={<Trending />} />
        <Route path="player" element={<Player />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
