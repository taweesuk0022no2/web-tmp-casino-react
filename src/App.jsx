import React from 'react'
import './App.css'
import Home from './views/Home'
import Slot from './views/Slot';
import LiveCasino from './views/LiveCasino'
import Fishing from './views/Fishing'
import GamesCard from './views/GamesCard'
import Login from './views/Login'
import Register from './views/Register';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to='/'></Link>
        <Link to='/slot'></Link>
        <Link to='/liveCasino'></Link>
        <Link to='/fishing'></Link>
        <Link to='/cardGames'></Link>
        <Link to='/login'></Link>
        <Link to='/register'></Link>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/slot' element={<Slot />} />
          <Route path='/liveCasino' element={<LiveCasino />} />
          <Route path='/fishing' element={<Fishing />} />
          <Route path='/cardGames' element={<GamesCard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App