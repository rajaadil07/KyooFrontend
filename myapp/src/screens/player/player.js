import React from 'react';
import "./player.css";
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import AudioPlayer from '../../components/audioPlayer/audioPlayer';

export default function Player() {
  console.log("Player component is rendering");
  return (
  <div className="screen-container flex">
    <div className="left-player-body">
    <AudioPlayer isPlaying={true}/>
    </div>
    <div className="right-player-body">
      <SongCard />
      <Queue />
      </div>
  </div>
  );
}
