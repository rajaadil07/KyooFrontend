import React from 'react';
import "./waveAnimation.css";

export default function WaveAnimation({isPlaying}) {

    const waveClass = isPlaying ? "box active" : "box";


  return (
  <div className='box-container flex'>
    <div className={`${waveClass} box 1`}></div>
    <div className={`${waveClass} box 2`}></div>
    <div className={`${waveClass} box 3`}></div>
    <div className={`${waveClass} box 4`}></div>
    <div className={`${waveClass} box 5`}></div>
    <div className={`${waveClass} box 6`}></div>
    <div className={`${waveClass} box 7`}></div>
    <div className={`${waveClass} box 2`}></div>
    <div className={`${waveClass} box 3`}></div>
    <div className={`${waveClass} box 4`}></div>
    <div className={`${waveClass} box 5`}></div>
    <div className={`${waveClass} box 6`}></div>
    <div className={`${waveClass} box 7`}></div>
 </div>
 );
}
