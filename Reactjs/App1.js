import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    'h1',
    {id:'heading1', className:'heading1Class'},
    'This is heading number 1'
)
const heading2 = <h2 id = "heading2" className='heading2Class'>This is heading number 2</h2>
const div1 = React.createElement(
    'div',
    {id:"mainDiv", className:"mainDivClass"},
    heading1,heading2
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div1);