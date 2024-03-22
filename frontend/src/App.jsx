
import './App.css'
import React, { useEffect } from 'react';
import Parallax from './components/Parallax'
import LeftNav from './components/navbar/LeftNav'
import RightNav from './components/navbar/RightNav'
import SectionTwo from './components/sectionTwo';

function App() {


  return (
    <>
    <LeftNav/><RightNav/>
    <Parallax/>
    <SectionTwo/>

    </>
  )
}

export default App
