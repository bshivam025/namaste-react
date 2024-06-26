import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { REST_MENU_IMG_URL } from '../config/config';
import Shimmer from './Shimmer';

const RestMenu = () => {
    let { restId } = useParams();
    let menu = useRestaurantMenu(restId);

    if (!menu) return <Shimmer />;

    let finalArr = menu?.cards?.filter(element => element?.card?.card?.info?.name);
    let { name, cuisines, costForTwoMessage, avgRatingString } = finalArr[0]?.card?.card?.info;
    let itemCards = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="rest-menu p-6 bg-gray-900 text-white">
            <div className="restaurant-info mb-8">
                <h1 className="text-3xl font-bold mb-4">{name}</h1>
                <p className="text-xl mb-2">Rating: <span className="text-yellow-400">{avgRatingString}</span></p>
                <p className="text-lg mb-4">Cuisines: {cuisines?.join(', ')} - {costForTwoMessage}</p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Menu</h3>
            <ul className="menu-list grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {itemCards.map((item, index) => (
                    <li key={index} className="menu-item bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="menu-item-info mb-2">
                            <div className="text-lg font-semibold mb-2">{item.card.info.name}</div>
                            <div className="text-gray-400">Rs. {(item.card.info.price / 100 || item.card.info.defaultPrice / 100)}</div>
                        </div>
                        {item.card.info.imageId && (
                            <img src={REST_MENU_IMG_URL + item.card.info.imageId} alt={item.card.info.name} className="w-full h-40 object-cover rounded-lg" />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestMenu;
