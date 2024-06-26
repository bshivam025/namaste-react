import Restaurant from "./Restaurant";
import {restaurants} from '../config/restaurantlist';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Shimmer from './Shimmer';

let Body = (darkMode = true) => {    
let [restaurantLists, setRestaurantLists] = useState();
let [resSearchList, setResSearchList] = useState();

useEffect( ()=>{
    async function fetchData(){
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4797627&lng=77.5033884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let jsonData = await data.json();
        let finalArr = [];

        for(let i = 0; i < jsonData?.data?.cards?.length; i++){
            let x = jsonData.data.cards[i];
            if(x.card.card.gridElements?.infoWithStyle.restaurants) {
                finalArr = x?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                break;
            }
        }
        setRestaurantLists(finalArr);
        setResSearchList(finalArr);
    }
    fetchData(); 
},[]);

    return !restaurantLists ? <Shimmer/> : (
        <div className={`restaurant-body ${darkMode ? 'darkModeOn' : ''}`} id="resbody">
            <div className='search-bar'>
                <input type="text" id="search-bar-input" placeholder="Search for restaurants" onChange={(e)=>{
                    let filteredArr = resSearchList.filter((data)=>{
                       let a = data.info.name.toLowerCase().includes(e.target.value.toLowerCase());
                       let b = data.info.cuisines.join(', ').toLowerCase().includes(e.target.value.toLowerCase());
                       return a || b;
                    });
                    setRestaurantLists(filteredArr);
                }}/>
            </div>
            <div className='filter-bar-top-rating'>
               <button className="top-rating-button" onClick = {()=>{
                    let filteredArr = resSearchList.filter((data)=>{
                        return data.info.avgRating > 4;
                    });
                    setRestaurantLists(filteredArr);
               }}>Top Rated</button>
               
               <button className="top-rating-button" onClick = {()=>{
                    let filteredData = resSearchList;
                    filteredData.sort((a,b)=>{
                        return a.info.avgRating - b.info.avgRating;
                        });

                    setRestaurantLists(filteredData);
               }}>Low to High</button>

                <button className="top-rating-button" onClick = {()=>{
                    let filteredData = resSearchList;
                    filteredData.sort((a,b)=>{
                        return Number(a.info.avgRating) < Number(b.info.avgRating) ? 1: -1;
                        });

                    setRestaurantLists(filteredData);
               }}>High to Low</button>

                <button className="top-rating-button white" onClick = {()=>{
                    let searchInput = document.getElementById('search-bar-input');
                    searchInput.value = '';
                    let filteredData = resSearchList;
                    setRestaurantLists(filteredData);
               }}>Clear</button>



            </div>
            <div className="restaurant-container">

                {restaurantLists?.map((restaurantObj) => {
                    let curr = restaurantObj.info;

                    return <Link key={curr.id}  to={'RestMenu/' + curr.id}><Restaurant RestaurantName = {curr.name} RestaurantCuisines = {curr.cuisines.join(', ')} RestaurantRating = {curr.avgRating} RestaurantDeliveryTime = {curr.sla.slaString} RestaurantImage = {curr.cloudinaryImageId}/></Link>
                })}
            </div>
        </div>
    )
}

export default Body;