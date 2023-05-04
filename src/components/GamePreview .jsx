import React, { useState, useEffect } from 'react';
import GamePreviewTable from './GamePreviewTable';
import GamePreviewDetails from './GamePreviewDetails';
import Header from './Header';

function GamePreview() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4002/games')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>

      
     
      <h1>NBA Game Previews</h1>
      {games.map((game, index) => (
        <div key={index}>
          <GamePreviewTable
            home={game.HOME}
            away={game.AWAY}
            conference={game.CONFERENCE}
          />
          " "
          <GamePreviewDetails
            date={game.DAY}
            time={game.TIME}
            court={game.COURT}
            loc={game.LOC}
            results={game.RESULTS}
            notes={game.NOTES}
          />
          ""
        </div>
      ))}
    </div>
  );
}

export default GamePreview;