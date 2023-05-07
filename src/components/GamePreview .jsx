import React, { useState, useEffect } from 'react';
import GamePreviewTable from './GamePreviewTable';
import GamePreviewDetails from './GamePreviewDetails';
import SeasonLeader from './SeasonLeader';


function GamePreview() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:4003/games')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error(error));
  }, []);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setShowDetails(true);

    // Hide the details after 5 seconds
    setTimeout(() => {
      setShowDetails(false);
    }, 5000);
  };

  const filteredGames = games.filter(game => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return searchRegex.test(game.HOME) || searchRegex.test(game.AWAY);
  });

  const handleAddGame = (newGame) => {
    setGames(prevGames => [...prevGames, newGame]);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className='container-1' style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='head-1'>
          <h1>NBA Game Previews</h1>
        </div>
        {/* <AddGames onAddGame={handleAddGame} /> */}
        <div className='search-container'>
          <input type='text' placeholder='Search games by team name' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      
        {filteredGames.map((game, index) => (
          <div key={index}>
            <GamePreviewTable
              home={game.HOME}
              away={game.AWAY}
              score1={game.score1}
              score2={game.score2}
              conference={game.CONFERENCE}
              image1={game.IMAGE1}
              image2={game.IMAGE2}
              onClick={() => handleGameClick(game)}
            />
          </div>
        ))}

        {showDetails && selectedGame && <GamePreviewDetails game={selectedGame} />}
      </div>

      <div style={{ minWidth: '300px' }}>
        <SeasonLeader games={filteredGames} />
      </div>
    </div>
  );
}

export default GamePreview;
