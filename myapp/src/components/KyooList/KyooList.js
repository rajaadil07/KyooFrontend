import React from 'react';
import './KyooList.css';
import SongCard from '../songCard';

const KyooList = ({ songRequests, onUpvote }) => {
  const validRequests = Array.isArray(songRequests) ? songRequests : [];
  const sortedRequests = validRequests.sort((a, b) => b.votes - a.votes);

  return (
    <div className="kyooList-container">
      <h2>Kyoo List</h2>
      <div className="kyooList-cards">
        {sortedRequests.map(request => (
          <div key={request.id} className="kyooList-card">
            <SongCard
              album={request.song}
              votes={request.votes}
              songRequestId={request.id}
              onUpvote={(newVotes) => onUpvote(request.id, newVotes)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KyooList;
