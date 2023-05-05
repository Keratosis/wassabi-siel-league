import React from 'react'

import {  Link, Route,  Routes } from 'react-router-dom'
import Header from './components/Header'
 import GamePreview from './components/GamePreview '
import GamePreviewDetails from './components/GamePreviewDetails'
import GamePreviewTable from './components/GamePreviewTable'
import TeamInfo from './components/TeamInfo'



const App = () => {



  return (<>
   <nav className=' nav '>

<Link className='link-4' to="/">Home</Link>   {""}
    <Link  className='link-3' to="/games">Games</Link>{" "}
    <Link  className='link-2' to="/preview">upcoming matchs</Link>{" "}
   <Link  className='link-1' to="/table">Details</Link>

  
  </nav> 
  



<Routes>
  <Route path="/" element={<Header/>} />
  <Route path="/GAMES" element={<GamePreview/>} />
  <Route path="/preview"  />
  <Route path="/table" element={<  TeamInfo/>} />
</Routes>
   
   
    


</> 

  )
}

export default App;
