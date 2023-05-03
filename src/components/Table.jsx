import React, { useEffect } from 'react'
import Games from './Games';


function Table({key,}){
  return (
    <div>
<table>
  <thead>
    <th>game no</th>
    <th>HOME</th>
    <th>vs</th>
    <th>AWAY</th>
    <th>CONFERENCE</th>
    <th>DAY</th>
    <th>TIME</th>
    <th>COURT</th>
    <th>LOCATION</th>
    <th>RESULTS</th>
    <th>NOTES</th>
  </thead>
</table>

    </div>
  )
}

export default Table;