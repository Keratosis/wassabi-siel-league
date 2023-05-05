import React, { useState, useEffect } from 'react';
import GamePreviewTable from './GamePreviewTable';
import GamePreviewDetails from './GamePreviewDetails';


function GamePreview() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4002/games')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error(error));
  }, []);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  }

  return (
    <div>
      <div className='container-1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='head-1'>
          <h1>NBA Game Previews</h1>
        </div>
      
        {games.map((game, index) => (
          <div key={index}>
            <GamePreviewTable
              home={game.HOME}
              away={game.AWAY}
              score1={game.score1}
              score2={game.score2}
              conference={game.CONFERENCE}
              onClick={() => handleGameClick(game)}
            />
          </div>
        ))}
      </div>

      {selectedGame && <GamePreviewDetails game={selectedGame} />}
    
    
    </div>
  );
}

export default GamePreview;
