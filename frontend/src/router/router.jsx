import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home.jsx';
import Gallery from '../components/gallery/Gallery.jsx';
import AboutPage from '../components/about/AboutPage.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/gallery',
                element: <Gallery />
                
            },
            {
                path: '/about',
                element: <AboutPage />
            }
        ]
    }
]);
// https://memoryhub-frontend-l8jf.onrender.com/