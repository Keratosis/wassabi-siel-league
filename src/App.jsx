import React from 'react'

import {  Link, Route,  Routes } from 'react-router-dom'
import Header from './components/Header'
 import GamePreview from './components/GamePreview '
import GamePreviewDetails from './components/GamePreviewDetails'
import GamePreviewTable from './components/GamePreviewTable'
import TeamInfo from './components/TeamInfo'
import UpcomingMatches from './components/UpcomingMatches'
import AddGames from './components/AddGames'



const App = () => {



  return (<>
   <nav className=' nav '>

<Link className='link-4' to="/">Home</Link>   {""}
    <Link  className='link-3' to="/games">Games</Link>{" "}
    <Link  className='link-2' to="/preview">upcoming matchs</Link>{" "}
   <Link  className='link-1' to="/table">teams</Link>
   <Link  className='link-0' to="/addgames">AddGames</Link>

  
  </nav> 
  



<Routes>
  <Route path="/" element={<Header/>} />
  <Route path="/GAMES" element={<GamePreview/>} />
  <Route path="/preview" element={<UpcomingMatches/>} />
  <Route path="/table" element={<  TeamInfo/>} />
  <Route path="/addgames" element={<  AddGames/>} />
</Routes>
   
   
    


</> 

  )
}

export default App;
