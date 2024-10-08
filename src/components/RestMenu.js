import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { REST_MENU_IMG_URL } from '../config/config';
import Shimmer from './Shimmer';
import RestaurantCategory from "./RestaurantCategory";
import {useState} from 'react';

const RestMenu = () => {
    let [showItems, setShowItems] = useState(0);
    let { restId } = useParams();
    let menu = useRestaurantMenu(restId);

    if (!menu) return <Shimmer />;

    let finalArr = menu?.cards?.filter(element => element?.card?.card?.info?.name);
    let { name, cuisines, costForTwoMessage, avgRatingString, cloudinaryImageId } = finalArr[0]?.card?.card?.info;
    let itemCards = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    const categories = itemCards.filter(item => item?.card?.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (

        <div className="rest-menu p-6 bg-gray-900 text-white">
            <div className="restaurant-header flex justify-between items-center mb-1">
                <div className="restaurant-info mb-8">
                    <h1 className="text-3xl font-bold mb-4">{name}</h1>
                    <p className="text-xl mb-2">Rating: <span className="text-yellow-400">{avgRatingString}</span></p>
                    <p className="text-lg mb-4">Cuisines: {cuisines?.join(', ')} - {costForTwoMessage}</p>
                </div>
                <div className="min-w-60 pr-4">
                    <img src = {REST_MENU_IMG_URL + cloudinaryImageId} alt={name} className="w-full h-64 object-cover rounded-lg mb-8" />
                </div>
            </div>
            <hr className="h-0.5 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h3 className="text-center text-3xl font-bold mb-4 underline underline-offset-8">- Menu -</h3>
            {
                categories.map( (category, index) => {
                    return (<RestaurantCategory key = {category?.card?.card?.title} props = {category?.card?.card} showItems = {showItems === index ? true:false} setShowItems = {()=> setShowItems(index)}/>)
                })
            }
        </div>
    );
}

export default RestMenu;
