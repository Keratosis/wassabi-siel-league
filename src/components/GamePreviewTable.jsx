import React from 'react';

function GamePreviewTable({ home, away, conference, score1, score2, onClick, image1, image2 }) {
  return (
    <div className="game-preview-table" onClick={onClick}>
      <div className="team-info">
        <div className="team-logo" title={home+ '   '+  conference + score1  + ' Details'}>

          <img srcSet={image1} alt={home} />
          <div className="team-name" >
            {home}
          </div>
        </div>
        <div className="vs">vs
        <div className="score">
        {score1} : {score2}
      </div>
      <div className="conference">{conference}</div></div>
        <div className="team-logo" title={away+'   '+  conference + score1   + ' Details'}  >
          <img srcSet={image2} alt={away} />
          <div className="team-name" >
            {away}
          </div>
        
        </div>
      </div>
      
    </div>
  );
}

export default GamePreviewTable;
