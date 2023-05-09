import React from 'react';


function GamePreviewTable({ home, away, conference, score1, score2, onClick, image1, image2 ,onClickDelete}) {
  return (
    <div className="game-preview-table" >
      <div className="team-info">
        <div className="team-logo" onClick={onClick} title={home+ '   '+  conference + score1  }>

          <img srcSet={image1} alt={home} />
          <div className="team-name" >
            {home}
          </div>
        </div>
        <div className="vs">vs
        
        <div className="score">
        {score1} : {score2}
      </div>
      <div className="conference">{conference}</div>
      <button onClick={onClickDelete}>Delete</button>
      </div>
        <div className="team-logo" onClick={onClick} title={away+'   '+  conference + score1   }  >
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
