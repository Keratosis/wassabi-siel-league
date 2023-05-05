import React, { useEffect, useState } from 'react'

export const TeamInfo = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4002/team`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGames(data)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <h3>Team Info</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <h4>Western Conference:</h4>
          {games.map((game, index) => (
            <div key={index}>
              {game["WESTERN CONFERENCE"].map((team, id) => (
                <p key={id}>{team}</p>
              ))}
            </div>
          ))}
        </div>
        <div>
          <h4>Eastern Conference:</h4>
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
  )
}

export default TeamInfo