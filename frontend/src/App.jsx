
import './App.css'
import { router } from './router/router.jsx';
import { RouterProvider } from 'react-router-dom';


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