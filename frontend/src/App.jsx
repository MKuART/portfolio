
import './App.css'
import { router } from './router/router.jsx';
import { RouterProvider } from 'react-router-dom';
import Parallax from './components/Parallax'
import LeftNav from './components/navbar/LeftNav'
import RightNav from './components/navbar/RightNav'
import SectionTwo from './components/sectionTwo';
import Arrows from './components/Arrows';
import ProjectSlide from './components/projectSlide';
import Login from './components/login/Login';

function App() {


  return (
    <div>
      <RouterProvider router={ router } />
    </div>  
  
  )
}

export default App


/**
 * 
 *     <>
    <LeftNav/><RightNav/>
    <ProjectSlide/>
    <Login/>
    <Parallax/>
    <Arrows/>
    <SectionTwo/>
    <SectionTwo/>
    </>
 */