import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home.jsx';
import Slot from './components/Slot.jsx';
import LiveCasino from './components/LiveCasino.jsx'
import Fishing from './components/Fishing.jsx'
import CardGames from './components/GamesCard.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/slot",
    element: <Slot />
  },
  {
    path: "/liveCasino",
    element: <LiveCasino />
  },
  {
    path: "/fishing",
    element: <Fishing />
  },
  {
    path: "/card",
    element: <CardGames />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
