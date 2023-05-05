import React from 'react';

function GamePreviewTable({ home, away, conference, score1, score2, onClick}) {
  return (
    <div className="game-preview-table"  onClick={onClick}>
      <div className="team-info">
        <div className="team-name" title={home + ' Details'}>{home}</div>{' '} vs
        <div className="team-name" title={away + ' Details'}>{away}</div>
      </div>
      <div className="score">{score1} : {score2}</div>
      <div className="conference">{conference}</div>
    </div>
  )
}

export default GamePreviewTable;