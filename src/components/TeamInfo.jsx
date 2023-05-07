import React, { useEffect, useState } from 'react';
import './TeamInfo.css';

const TeamInfo = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4003/team`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGames(data)
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <div className="team-info-container">
      <h3>Team Info</h3>
      <div className="team-info-wrapper">
        <div className="team-info-card">
          <img className="team-logo" src='https://content.sportslogos.net/logos/6/1001/thumbs/100139262018.gif' alt="Western Conference Logo"/>
          <div className="team-list">
            {games.map((game, index) => (
              <div key={index}>
                {game["WESTERN CONFERENCE"].map((team, id) => (
                  <p key={id}>{team}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="team-info-card">
          <img className="team-logo" src='https://content.sportslogos.net/logos/6/999/thumbs/99995152018.gif' alt="Eastern Conference Logo"/>
          <div className="team-list">
            {games.map((game, index) => (
              <div key={index}>
                {game["EASTERN CONFERENCE"].map((team, id) => (
                  <p key={id}>{team}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo;
