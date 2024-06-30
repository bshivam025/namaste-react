import ItemList from "./ItemList";
import { useState } from 'react';
const RestaurantCategory = ({ props }) => {

    const [showItems, setShowItems] = useState(false);
    let { title, itemCards } = props;

    function handleClick() {
        setShowItems(!showItems);
    }

    return (
        <div className="text-center">
            <div className="w-1/2 mx-auto my-5 bg-white text-black py-1 shadow-slate-50 shadow-sm rounded-md">
                <div className="flex justify-between text-xl font-bold cursor-pointer" onClick={handleClick}>
                    <span className="pl-1">{title} ({itemCards.length})</span>
                    <span className="pr-5">{showItems == false ? '⬇️':'⬆️'}</span>
                </div>
                <div>
                    {showItems && <ItemList items={itemCards}/>}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;