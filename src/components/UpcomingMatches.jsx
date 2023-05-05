import React, { useState, useEffect } from 'react';

const UpcomingMatches = () => {
  const [upcomingMatches, setUpcomingMatches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4002/games')
      .then(response => response.json())
      .then(data => {
        
        const upcomingGames = data.filter(game => !game.score1 && !game.score2);
       
        upcomingGames.sort((a, b) => new Date(a.date) - new Date(b.date));
        setUpcomingMatches(upcomingGames);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Upcoming Matches</h2>
      {upcomingMatches.map((game, index) => (
        <div key={index}>
          <p>{game.DATE} - {game.DAY}</p>
          <p>{game.HOME} vs. {game.AWAY}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMatches;