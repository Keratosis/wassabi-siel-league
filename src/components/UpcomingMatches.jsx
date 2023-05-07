import React, { useState, useEffect } from 'react';

function UpcomingMatches(){
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://siel-data.onrender.com/games')
      .then(response => response.json())
      .then(data => {
        const upcomingGames = data.filter(game => !game.score1 && !game.score2);
        upcomingGames.sort((a, b) => new Date(a.date) - new Date(b.date));
        setUpcomingMatches(upcomingGames);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % upcomingMatches.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [upcomingMatches]);

  if (upcomingMatches.length === 0) {
    return <div>Loading...</div>;
  }

  const currentMatch = upcomingMatches[currentIndex];
  const { HOME, AWAY, DATE, DAY, IMAGE1, IMAGE2 } = currentMatch;

  return (
    <div>
      <h2>Upcoming Matches</h2>
      <div  className='match-details ' >
      <div className="match-date" >{DATE} - {DAY}</div>
      <br/>
      <div className='team-0'>
      <div className='home'>
        <img src={IMAGE1} alt={HOME} />
        <div>{HOME}</div>
      </div>
      vs
      
      <div className='away'>
        <img src={IMAGE2} alt={AWAY} />
        <div>{AWAY}</div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default UpcomingMatches;