import React from 'react';

function GamePreviewDetails({ game }) {
  return (
    <div>


    <div className="game-preview-details">
      <h2>{game.HOME} vs {game.AWAY}</h2>
      <p>Conference: {game.CONFERENCE}</p>
      <p>Score: {game.score1} - {game.score2}</p>
      <p>Location: {game.LOCATION}</p>
    </div>

    </div>
  )
}

export default GamePreviewDetails;
