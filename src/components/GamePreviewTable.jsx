import React from 'react'
import { Link } from 'react-router-dom'

function GamePreviewTable({ home, away, conference }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Home</th>
          <th>Away</th>
          <th>Conference</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link to={`/table/${home}`}>{home}</Link>
          </td>
          <td>
            <Link to={`/table/${away}`}>{away}</Link>
          </td>
          <td>{conference}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default GamePreviewTable;