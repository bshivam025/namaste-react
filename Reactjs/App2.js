import React from 'react';
import ReactDOM from 'react-dom/client';

//#CASE 1: code using React.createElement() method

let heading1 = React.createElement(
    'h1',
    {id: 'h1'},
    'This is heading number 1'
)
let heading2 = React.createElement(
    'h2',
    {id: 'h2'},
    'This is heading number 2'
)
let heading3 = React.createElement(
    'h3',
    {id: 'h3'},
    'This is heading number 3' 
)
let mainDiv = React.createElement(
    'div',
    {className: 'title'},
    heading1,heading2,heading3
)

let root = ReactDOM.createRoot(document.getElementById('root2'));
root.render(mainDiv);

//#CASE 2: code using JSX

let heading4 = <h1 id='h4'>This is heading number 4</h1>
let heading5 = <h2 id='h5'>This is heading number 5</h2>

let mainDiv2 = <div className='title'>{heading4}{heading5}</div>
root.render(mainDiv2);

//#CASE 3: code using functional component

let Heading6 = () => {
    return (
        <h1 id='h6'>This is heading number 6</h1>
    )
}
let Heading7 = ()=> {
    return (
        <h2 id='h7'>This is heading number 7</h2>
    )
}
let MainDiv3 = () => {
    return (
        <div className='title'>
            <Heading6/>
            <Heading7/>
        </div>
    )
}

root.render(<MainDiv3/>);

//#CASE 4: another way of Case3

let MainDiv4 = ({children}) => {
    return (
        <div id='mainDiv4' className='title'>
            {children}
        </div>
    )
}

root.render(
    <MainDiv4>
        <Heading7/>
        <Heading6/>
    </MainDiv4>
)

// what is {children} in the above code? What is it doing
// it is a special prop which contains all the children of the component, It is used to display whatever is passed between the opening and closing tags of the component