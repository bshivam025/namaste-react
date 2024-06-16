import React from 'react';
import ReactDOM from 'react-dom/client';

// stopped using this file after episode 3 and made src folder with separate config and components folder. Use this file for reference only.

// SWAGIEE begins



let Restaurant = ({RestaurantName,RestaurantCuisines,RestaurantRating,RestaurantDeliveryTime}) => {
    let classRating = "kuch bhi";
    if(RestaurantRating > 4){
        classRating = 'green';
    } else if(RestaurantRating > 3){
        classRating = 'orange';
    } else {
        classRating = 'red';
    }
    return (
        <div className='restaurant-card'>
            <div className='restaurant-image'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJE1ckyksMqHLjaymNSigeJU-fDOumexzAVmNS5XwkCMEZRLgoGI6bYSqLeEmyIjjTMvY&usqp=CAU' />
            </div>
            <div className='restaurant-info'>
                <div className='restaurant-name'>
                    <h3>{RestaurantName}</h3>
                </div>
                <div className='restaurant-cuisines'>
                    <h4>{RestaurantCuisines}</h4>
                </div>
                <div className='restaurant-rating'>
                    <h4 className = {classRating}>{RestaurantRating} Stars</h4>
                </div>
                <div className='restaurant-delivery-time'>
                    <h4>{RestaurantDeliveryTime}</h4>
                </div>
            </div>
        </div>
    )
}

let Body = () => {
    return (
        <div className='restaurant-body'>
            <div className='search-bar'>
                Search
            </div>
            <div className="restaurant-container">
                <Restaurant 
                RestaurantName = 'Pizza Hut'
                RestaurantCuisines = 'Italian, Punjabi, Bihari'
                RestaurantRating = {4.5}
                RestaurantDeliveryTime = '30 mins'
                />
                <Restaurant 
                RestaurantName = 'Dominos'
                RestaurantCuisines = 'Italian, Bihari'
                RestaurantRating = {3.5}
                RestaurantDeliveryTime = '30 mins'
                />
                <Restaurant 
                RestaurantName = 'McDonalds'
                RestaurantCuisines = 'Italian, Bihari'
                RestaurantRating = {1.5}
                RestaurantDeliveryTime = '30 mins'
                />
            </div>
        </div>
    )
}


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