import React from 'react'

import {  Link, Route,  Routes } from 'react-router-dom'
import Header from './components/Header'
 import GamePreview from './components/GamePreview '
import TeamInfo from './components/TeamInfo'
import UpcomingMatches from './components/UpcomingMatches'
import AddGame from './components/AddGame'
import  "./nav.css"
import Contact from './components/Contact'




const App = () => {



  return (<>
   <nav className=' nav '>
    <div>   
       <img src="https://cdn.nba.com/logos/leagues/logo-nba.svg" alt="NBA logo" height="40" />
   </div>
  
  <Link className='link-4' to="/">HOME</Link>   {""}
    <Link  className='link-3' to="/games">GAMES</Link>{" "}
    <Link  className='link-2' to="/preview">MATCHES</Link>{" "}
    <Link  className='link-1' to="/table">TEAMS</Link>{" "}
    <Link  className='link-5' to="/ADDGames">SETUP </Link> 
    <Link  className='link-5' to="/contact">CONTACTS</Link> 
    
    

  </nav> 
  
<Routes>
  <Route path="/" element={<Header/>} />
  <Route path="/GAMES" element={<GamePreview/>} />
  <Route path="/preview" element={<UpcomingMatches/>} />
  <Route path="/table" element={<  TeamInfo/>} />
  <Route path="/ADDGames" element={<AddGame/>} />
  <Route path="/contact" element={<Contact/>} />

</Routes>
   
   
    


</> 

  )
}

export default App;

