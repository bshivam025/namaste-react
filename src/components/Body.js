import Restaurant, {RestaurantMod} from "./Restaurant";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Shimmer from './Shimmer';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ({ darkMode = true }) => {    
    let [restaurantLists, setRestaurantLists] = useState([]);
    let [resSearchList, setResSearchList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4797627&lng=77.5033884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            let jsonData = await data.json();
            let finalArr = [];

            for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
                let x = jsonData.data.cards[i];
                if (x.card.card.gridElements?.infoWithStyle.restaurants) {
                    finalArr = x?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    break;
                }
            }
            setRestaurantLists(finalArr);
            setResSearchList(finalArr);
        }
        fetchData();
    }, []);

    if (!useOnlineStatus()) return <div className="offline"><h1>You are offline</h1></div>;
    let RestaurantCardModify = RestaurantMod(Restaurant);

    return restaurantLists.length == 0? <Shimmer /> : (
        <div className={`restaurant-body ${darkMode ? 'darkModeOn bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-6`}>
            <div className="restaurant-header flex justify-between items-center mb-6">
                <div className="search-bar p-4 m-0">
                    <input 
                        type="text" 
                        className="w-72 p-2 rounded border border-gray-300 outline-none focus:border-blue-500 focus:shadow-md" 
                        id="search-bar-input" 
                        placeholder="Search for restaurants" 
                        onChange={(e) => {
                            let filteredArr = resSearchList.filter((data) => {
                                let a = data.info.name.toLowerCase().includes(e.target.value.toLowerCase());
                                let b = data.info.cuisines.join(', ').toLowerCase().includes(e.target.value.toLowerCase());
                                return a || b;
                            });
                            setRestaurantLists(filteredArr);
                        }} 
                    />
                </div>
                <div className="filter-bar-top-rating flex items-center">
                    <button 
                        className="top-rating-button bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700" 
                        onClick={() => {
                            let filteredArr = resSearchList.filter((data) => {
                                return data.info.avgRating > 4;
                            });
                            setRestaurantLists(filteredArr);
                        }}
                    >
                        Top Rated
                    </button>
                    <button 
                        className="top-rating-button bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700" 
                        onClick={() => {
                            let searchInput = document.getElementById('search-bar-input');
                            searchInput.value = '';
                            setRestaurantLists(resSearchList);
                        }}
                    >
                        Clear
                    </button>
                </div>
            </div>
            <div className="restaurant-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {restaurantLists?.map((restaurantObj) => {
                    let curr = restaurantObj.info;
                    return (
                        <Link key={curr.id}  to={'RestMenu/' + curr.id} className="transform transition duration-300 hover:scale-105">
                            <RestaurantCardModify RestaurantName={curr.name} RestaurantCuisines={curr.cuisines.join(', ')} RestaurantRating={curr.avgRating} RestaurantDeliveryTime={curr.sla.slaString} RestaurantImage={curr.cloudinaryImageId} />
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Body;
