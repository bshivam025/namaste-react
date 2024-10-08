import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';  
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Cart from './components/Cart';
import Contact from './components/Contact';
import RestMenu from './components/RestMenu';
import { useState, useContext } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

// SWAGIEE begins

let AppLayout = () => {
    
    let [UserName, setUserName] = useState('');
    useEffect(()=>{
        let data = {
            name: "Shivam Bhardwaj"
        }
        setUserName(data.name);
    }, [])
    let darkModeLocal = localStorage.getItem('darkMode') || false;
    let [darkMode, setDarkMode] = useState(Boolean(darkModeLocal));

    return (
        <Provider store={appStore}>
            <div className='app'>
                <UserContext.Provider value={{ loggenInUser: UserName }}>
                    <Header />
                </UserContext.Provider>
                <Outlet />
                <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
        </Provider>
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
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }
])

//Rendering

let root = document.getElementById('root');
root = ReactDOM.createRoot(root);
root.render(<RouterProvider router = {router} />);