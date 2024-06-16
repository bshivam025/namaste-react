import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_URL, REST_MENU_IMG_URL } from '../config/config';
import Shimmer from './Shimmer';

const RestMenu = () => {
    let [menu, setMenu] = useState();
    let { restId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        let url = REST_MENU_URL + `&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`;
        let response = await fetch(url);
        let data = await response.json();
        setMenu(data?.data);
    }

    if (!menu) return <Shimmer />;

    let finalArr = menu?.cards?.filter(element => element?.card?.card?.info?.name);
    let { name, cuisines, costForTwoMessage, avgRatingString } = finalArr[0]?.card?.card?.info;
    let itemCards = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log("🫡 ~ RestMenu ~ itemCards:", itemCards);

    return (
        <div className="RestMenu">
            <h1>{name}</h1>
            <p>Rating: {avgRatingString}</p>
            <p>Cuisines: {cuisines?.join(', ')} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item, index) => (
                    <li key={index}>
                        <div>
                            {item.card.info.name} - {'Rs.' + (item.card.info.price / 100 || item.card.info.defaultPrice / 100)}
                        </div>
                        <img src={REST_MENU_IMG_URL + item.card.info.imageId} alt={item.card.info.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestMenu;
