import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import RightNav from './navbar/RightNav.jsx';
import LeftNav from './navbar/LeftNav.jsx';
import Parallax from '../parallax/Parallax.jsx';
import ProjectSlide from './projectslide/projectSlide.jsx';
import Login from './login/Login.jsx';


export const Home = () => {
  const [currentPage, setCurrentPage] = useState('parallax'); // Standardseite: Parallax

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <LeftNav onNavigation={handleNavigation}/>
      <RightNav onNavigation={handleNavigation} />
      {currentPage === 'parallax' && <Parallax />} 
      <ProjectSlide onNavigation={handleNavigation}/>
      <Login/>
      <Outlet />
    </>
  );
};
// Outlet 'roots from right nav are rendered'
export default Home;