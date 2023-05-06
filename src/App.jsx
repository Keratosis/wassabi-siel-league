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
   
  

<Header />

<Routes>
  <Route path="/GAMES" element={<GamePreview/>} />
  <Route path="/preview" element={<UpcomingMatches/>} />
  <Route path="/table" element={<  TeamInfo/>} />
  <Route path="/addgames" element={<  AddGames/>} />
</Routes>
   
   
    


</> 

  )
}

export default App;
