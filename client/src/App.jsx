// import {Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import HomePage from './Pages/LandingPages/HomePage';
import AboutPage from './Pages/LandingPages/AboutPage'
import SolutionPage from './Pages/LandingPages/SolutionPage'
import KnowledgeHub from './Pages/LandingPages/KnowledgeHub';

function App() {
  const navigate = useNavigate()
  // const location = useLocation()
  useEffect(()=>{
    if(window.location.pathname === '/'){
      navigate('/home')
    }
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path ='/solutions' element = { <SolutionPage /> } />
        <Route path ='/knowledgehub' element = { <KnowledgeHub /> } />
      </Routes>
      
    </div>
  );
}

export default App;
