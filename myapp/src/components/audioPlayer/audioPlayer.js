import React from 'react';
import "./audioPlayer.css";
import ProgressCircle from './progressCircle';
import WaveAnimation from './waveAnimation';
import Controls from './controls';

export default function AudioPlayer({isPlaying}) {
  return (
    <div className="player-body flex">
        <div className='player-left-body'>
            <ProgressCircle
             percentage={75}
             isPlaying={true}
             // image
             size={300}
             color="#C96850"
            />
        </div>
        <div className="player-right-body flex">
            <p className="song-title"></p>
            <p className="song-artist"></p>
            <div className="player-right-bottom flex">
            <div className="song-duration flex">
                <p className="duration">0:01</p>
                <WaveAnimation isPlaying={true} />
                <p className="duration">0:30</p>
            </div>
            <Controls
            // isPlaying
            // setIsPlaying
            // handleNext
            // handlePrev
            // total 
            />
        </div>
</div>
</div>

  );
}
