import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';  
import Body from './components/Body';

// SWAGIEE begins

let AppLayout = () => {
    return (
        <div className = 'app'>
            <Header />
            <Body />
        </div>
    )
}

// SWAGIEE ends

//Rendering

let root = document.getElementById('root');
root = ReactDOM.createRoot(root);
root.render(<AppLayout />);