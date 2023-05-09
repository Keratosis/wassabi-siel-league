import React, { useState, useEffect } from 'react';
import GamePreviewTable from './GamePreviewTable';
import GamePreviewDetails from './GamePreviewDetails';
import SeasonLeader from './SeasonLeader';
import Notfound from './Notfound';


function GamePreview() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://siel-data.onrender.com/games')
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

  const handleDeleteGame = (game) => {
    fetch(`https://siel-data.onrender.com/games/${game.id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setGames(prevGames => prevGames.filter(g => g !== game));
          alert('The game has been successfully deleted.');
        } else {
          throw new Error('Failed to delete the game');
        }
      })
      .catch(error => console.error(error));
  };
  

  const filteredGames = games.filter(game => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return searchRegex.test(game.HOME) || searchRegex.test(game.AWAY);
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'row' ,backgroundColor:"black"}}>
      <div className='container-1' style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='head-1'>
          <h1>NBA Game Previews</h1>
        </div>
       
        <div className='search-container'>
          <input type='text' placeholder='Search games by team name'  size={45} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      
        {filteredGames.length > 0 ? (
          filteredGames.map((game, index) => (
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
                onClickDelete={() => handleDeleteGame(game)} />
            </div>
          ))
        ) : (
          <Notfound/>
        )}

        {showDetails && selectedGame && <GamePreviewDetails game={selectedGame} />}
      </div>

      <div style={{ minWidth: '400px' }}>
        <SeasonLeader games={filteredGames} />
      </div>

    </div>
  );
}

export default GamePreview;
