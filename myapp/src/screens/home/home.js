import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Player from '../player/player';
import Trending from '../trending/trending';
import Sidebar from '../../components';
import SongCard from '../../components/songCard';
import SearchBar from '../../components/searchBar/SearchBar';
import './home.css';

export default function Home() {
  const [songData, setSongData] = useState(null);
  const [songRequests, setSongRequests] = useState([]);
  const [approvedSongs, setApprovedSongs] = useState(new Set());

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events/song-requests/')
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched songRequests data:", data);
        const sortedData = [...data].sort((a, b) => b.votes - a.votes);
        setSongRequests(sortedData);
      })
      .catch((error) => console.error('Error fetching song requests:', error));
  }, []);

  const handleSearch = (query) => {
    fetch(`http://127.0.0.1:8000/api/songs/search/?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        const song = {
          id: Date.now(),
          song: {
            title: data.title,
            artist: data.artist,
            album: data.album,
            images: [{ url: data.album_cover }],
            spotify_url: data.spotify_url
          },
          votes: 0
        };
        console.log("Song Request:", song);
  
        setSongRequests((prevRequests) => [song, ...prevRequests]);
      })
      .catch((error) => console.error('Error fetching song:', error));
  };

  const handleUpvote = (id, newVotes) => {
    setSongRequests((prevRequests) => {
      const updatedRequests = prevRequests.map((request) => 
        request.id === id ? { ...request, votes: newVotes } : request
      );
      return updatedRequests.sort((a, b) => b.votes - a.votes);
    });
  };

  const handleApprove = (id) => {
    console.log("Song Approved:", id);
    setApprovedSongs((prevApproved) => new Set([...prevApproved, id]));
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/events/song-requests/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error("Server responded with an error status:", response.status);
        return;
      }

      setSongRequests((prevRequests) => prevRequests.filter((request) => request.id !== id));
    } catch (error) {
      console.error("Failed to delete song:", error);
    }
  };

  return (
    <div className="main-body">
      <Sidebar />
      <div className="content-container">
        <SearchBar onSearch={handleSearch} />
        <div className="song-card-container">
          {songData && <SongCard album={songData} />}
          {songRequests.length > 0 && songRequests.map((request) => 
            <SongCard 
              key={request.id} 
              album={request.song} 
              votes={request.votes} 
              songRequestId={request.id} 
              onUpvote={(newVotes) => handleUpvote(request.id, newVotes)}
              onApprove={() => handleApprove(request.id)}
              onReject={() => handleReject(request.id)}
              isApproved={approvedSongs.has(request.id)}
            /> 
          )}
        </div>
        <Routes>
          <Route path="trending" element={<Trending />} />
          <Route path="player" element={<Player />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  ); 
}
