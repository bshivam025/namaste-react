import Restaurant from "./Restaurant";
import {restaurants} from '../config/restaurantlist';
import {useState, useEffect} from 'react';

let Body = () => {
let arr = useState(restaurants);
let restaurantLists = arr[0];
let setRestaurantLists = arr[1];

useEffect( ()=>{
    async function fetchData(){
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4797627&lng=77.5033884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let jsonData = await data.json();

        setRestaurantLists(jsonData.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
    }
    fetchData(); 
},[]);
    return (
        <div className='restaurant-body'>
            <div className='search-bar'>
                <h4>Search</h4> <input type="text" id="search-bar-input" placeholder="Search for restaurants" onChange={(e)=>{
                    let filteredArr = restaurants.filter((data)=>{
                       let a = data.info.name.toLowerCase().includes(e.target.value.toLowerCase());
                       let b = data.info.cuisines.join(', ').toLowerCase().includes(e.target.value.toLowerCase());
                       return a || b;
                    });
                    setRestaurantLists(filteredArr);
                }}/>
            </div>
            <div className='filter-bar-top-rating'>
               <button className="top-rating-button" onClick = {()=>{
                    let filteredArr = restaurants.filter((data)=>{
                        return data.info.avgRating > 4;
                    });
                    setRestaurantLists(filteredArr);
               }}>Top Rated</button>
               
               <button className="top-rating-button" onClick = {()=>{
                    let filteredData = [...restaurants];
                    filteredData.sort((a,b)=>{
                        return a.info.avgRating - b.info.avgRating;
                    });

                    setRestaurantLists(filteredData);
               }}>Low to High</button>

                <button className="top-rating-button" onClick = {()=>{
                    let filteredData = [...restaurants];
                    filteredData.sort((a,b)=>{
                        return a.info.avgRating < b.info.avgRating ? 1: -1;
                    });

                    setRestaurantLists(filteredData);
               }}>High to Low</button>

                <button className="top-rating-button white" onClick = {()=>{
                    let searchInput = document.getElementById('search-bar-input');
                    searchInput.value = '';
                    let filteredData = [...restaurants];
                    setRestaurantLists(filteredData);
               }}>Clear</button>



            </div>
            <div className="restaurant-container">

                {restaurantLists.map((restaurantObj) => {
                    let curr = restaurantObj.info;

                    return <Restaurant
                        key={curr.id}
                        RestaurantName = {curr.name}
                        RestaurantCuisines = {curr.cuisines.join(', ')}
                        RestaurantRating = {curr.avgRating}
                        RestaurantDeliveryTime = {curr.sla.slaString}
                        RestaurantImage = {curr.cloudinaryImageId}
                    />
                })}
            </div>
        </div>
    )
}

export default Body;