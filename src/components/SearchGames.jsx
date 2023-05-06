import React, { useState } from 'react';
import GamePreviewTable from './GamePreviewTable';
import GamePreviewDetails from './GamePreviewDetails';

function SearchGames({ games }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredGames(games.filter(game =>
      game.HOME.toLowerCase().includes(term) ||
      game.AWAY.toLowerCase().includes(term) ||
      game.CONFERENCE.toLowerCase().includes(term)
    ));
  }

  const [selectedGame, setSelectedGame] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setShowDetails(true);

    // Hide the details after 5 seconds
    setTimeout(() => {
      setShowDetails(false);
    }, 5000);
  }

  return (
    <div>
      <input type='text' placeholder='Search games...' value={searchTerm} onChange={handleSearchChange} />

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
  );
}

export default SearchGames;
