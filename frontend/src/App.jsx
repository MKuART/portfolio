
import './App.css'
import React, { useEffect } from 'react';
import Parallax from './components/Parallax'
import LeftNav from './components/navbar/LeftNav'
import RightNav from './components/navbar/RightNav'
import SectionTwo from './components/sectionTwo';
import Arrows from './components/Arrows';
import ProjectSlide from './components/projectSlide';
import Login from './components/login/Login';

function App() {


  return (
    <>
    <LeftNav/><RightNav/>
    <ProjectSlide/>
    <Login/>
    <Parallax/>
    <Arrows/>
    <SectionTwo/>
    <SectionTwo/>
    </>
  )
}

export default App
