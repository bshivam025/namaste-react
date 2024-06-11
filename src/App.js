import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';  
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';
// SWAGIEE begins

let AppLayout = () => {
    let [darkMode, setDarkMode] = useState(false);
    return (
        <div className = 'app'>
            <Header />
            <Body darkMode = {darkMode} />
            <Footer darkMode = {darkMode} setDarkMode = {setDarkMode} />
        </div>
    )
}

// SWAGIEE ends

//Rendering

let root = document.getElementById('root');
root = ReactDOM.createRoot(root);
root.render(<AppLayout />);