import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';  
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestMenu from './components/RestMenu';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// SWAGIEE begins

let AppLayout = () => {
    let darkModeLocal = localStorage.getItem('darkMode') || false;
    let [darkMode, setDarkMode] = useState(Boolean(darkModeLocal));

    return (
        <div className = 'app'>
            <Header />
            <Outlet/>
            <Footer darkMode = {darkMode} setDarkMode = {setDarkMode} />
        </div>
    )
}

// SWAGIEE ends

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/RestMenu/:restId',
                element: <RestMenu />
            }
        ],
        errorElement: <Error/>
    }
])

//Rendering

let root = document.getElementById('root');
root = ReactDOM.createRoot(root);
root.render(<RouterProvider router = {router} />);