import React from 'react';
import "./sidebar.css";
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from 'react-icons/md';


export default function Sidebar() {
  return (
  <div className="sidebar-container">
        <img 
         src="https://static.vecteezy.com/system/resources/previews/008/721/928/original/single-continuous-line-drawing-black-sound-waves-music-audio-frequency-voice-line-waveform-electronic-radio-signal-volume-level-symbol-curve-radio-waves-one-line-draw-graphic-design-vector.jpg" 
         className="profile-img" 
         alt="profile"
        />
        <div>
          <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
          <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
          <SidebarButton title ="Help" to="/favorites" icon={<MdFavorite />} />
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />

   </div>
 );
}
