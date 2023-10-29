import React from 'react';
import "./songCard.css";
import AlbumImage from './albumImage';
import AlbumInfo from './albumInfo';

const API_URL = 'http://127.0.0.1:8000/api/events/song-requests/';

function SongCard({ 
  album, 
  votes, 
  songRequestId, 
  onUpvote, 
  onApprove, 
  onReject, 
  isApproved 
}) {

  const handleUpvote = async () => {
    if (!songRequestId) {
      console.error("Song Request ID is missing. Upvote action aborted.");
      return;
    }
    
    const upvoteURL = `${API_URL}${songRequestId}/upvote/`;
    
    try {
      const response = await fetch(upvoteURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
  
      const { votes: updatedVotes } = await response.json();
      onUpvote(updatedVotes);
    } catch (error) {
      console.error("Error upvoting song:", error.message);
    }
  };

  const albumImageUrl = album?.images?.[0]?.url;

  return (
    <div className="songCard-body flex">
      <AlbumImage url={albumImageUrl} />
      <AlbumInfo album={album} />
      <div className="votes-section">
        Votes: {votes}
        <button onClick={handleUpvote} className="upvote-button">+</button>
      </div>
      {!isApproved && (
        <div className="approval-buttons">
          <button onClick={() => onApprove(songRequestId)} className="approve-button">Approve</button>
          <button onClick={() => onReject(songRequestId)} className="reject-button">Reject</button>
        </div>
      )}
    </div>
  );
}

export default SongCard;
