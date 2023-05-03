import React, { useEffect, useState } from 'react'
import Table from './Table';


function Games(){
const [data, SetValue] = useState([])


useEffect(() => {
fetch('http://localhost:4001/games')
.then((res)=>(res.json()))
.then((data)=>{
    console.table(data)

})
    
}, []);


return (
    <div>
{data.map((g)=>
{
  <Table
  key={g.GAME}
  time1={g.HOME}
  time2={g.AWAY}
  conference={g.CONFERENCE}
  date={g.DAY}
  time={g.TIME}
  court={g.COURT}
  loc={g.LOCATION}
  results={g.RESULTS}
  notes={g.NOTES}


  
  />
})}

    </div>
  )
}

export default Games;