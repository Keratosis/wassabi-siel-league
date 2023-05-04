import React from 'react'

import {  Link, Route,  Routes } from 'react-router-dom'
import Header from './components/Header'
 import GamePreview from './components/GamePreview '
import GamePreviewDetails from './components/GamePreviewDetails'
import GamePreviewTable from './components/GamePreviewTable'



const App = () => {



  return (<>
   <nav>

    <Link to="/">Home</Link> {""}
    <Link to="/games">Games</Link>{" "}
    <Link to="/preview">upcoming matchs</Link>{" "}
   <Link to="/table">Details</Link>

   <Header />
  </nav> 
  



<Routes>
  <Route path="/" element={<Header/>} />
  <Route path="/GAMES" element={<GamePreview/>} />
  <Route path="/preview"  />
  <Route path="/table" />
</Routes>
   
   
    


</> 

  )
}

export default App;
