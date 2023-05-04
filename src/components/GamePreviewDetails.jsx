import React from 'react';

function GamePreviewDetails({ date, time, court, loc, results, notes }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Court</th>
          <th>Location</th>
          <th>Results</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{date}</td>
          <td>{time}</td>
          <td>{court}</td>
          <td>{loc}</td>
          <td>{results}</td>
          <td>{notes}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default GamePreviewDetails;