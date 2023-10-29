import React from 'react';
import "./albumInfo.css";

export default function AlbumInfo({ album }) {
  return (
    <div>
      <div>{album.title}</div>
      <div>{album.artist}</div>
      <div>{album.album}</div>
    </div>
  );
}
