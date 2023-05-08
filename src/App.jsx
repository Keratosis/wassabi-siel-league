import React from 'react'

import {  Link, Route,  Routes } from 'react-router-dom'
import Header from './components/Header'
 import GamePreview from './components/GamePreview '
import TeamInfo from './components/TeamInfo'
import UpcomingMatches from './components/UpcomingMatches'
import AddGame from './components/AddGame'



const App = () => {



  return (<>
   <nav className=' nav '>
    <Link className='link-4' to="/">Home</Link>   {""}
    <Link  className='link-3' to="/games">Games</Link>{" "}
    <Link  className='link-2' to="/preview">upcoming matchs</Link>{" "}
    <Link  className='link-1' to="/table">teams</Link>
    <Link  className='link-5' to="/ADDGames">AddGames</Link>{" "}
    
    
  </nav> 
  
<Routes>
  <Route path="/" element={<Header/>} />
  <Route path="/GAMES" element={<GamePreview/>} />
  <Route path="/preview" element={<UpcomingMatches/>} />
  <Route path="/table" element={<  TeamInfo/>} />
  <Route path="/ADDGames" element={<AddGame/>} />
</Routes>
   
   
    


</> 

  )
}

export default App;

