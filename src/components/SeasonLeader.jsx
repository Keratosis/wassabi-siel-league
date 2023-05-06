import React from 'react';

function SeasonLeader({ games }) {
  // Use reduce to calculate the total score for each team
  const teamScores = games.reduce((scores, game) => {
    // Add the score for the home team
    scores[game.HOME] = (scores[game.HOME] || 0) + game.score1;
    // Add the score for the away team
    scores[game.AWAY] = (scores[game.AWAY] || 0) + game.score2;
    return scores;
  }, {});

  // Convert the teamScores object to an array and sort it by score
  const sortedTeams = Object.keys(teamScores).map(team => {
    return { name: team, score: teamScores[team] };
  }).sort((a, b) => b.score - a.score);

  return (
    <div className='season'>
      <h2>Season Leader</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Score</th>
            <th>points</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, index) => (
            <tr key={index}>
               <td>{team.name}</td> 
              <td>{team.score}</td>
              <td> </td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SeasonLeader;
