import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './components/views/Home';
import Slot from './components/views/Slot';
import LiveCasino from './components/views/LiveCasino'
import Fishing from './components/views/Fishing'
import CardGames from './components/views/GamesCard'
import Login from './components/views/Login'
import Register from './components/views/Register'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "slot",
    element: <Slot />
  },
  {
    path: "liveCasino",
    element: <LiveCasino />
  },
  {
    path: "fishing",
    element: <Fishing />
  },
  {
    path: "card",
    element: <CardGames />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
