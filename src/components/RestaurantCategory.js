import ItemList from "./ItemList";
import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const RestaurantCategory = ({ props, showItems, setShowItems }) => {
    let { title, itemCards } = props;

    function handleClick() {
        setShowItems();
    }

    return (
        <div className="text-center">
            <div className="w-1/2 mx-auto my-5 bg-white text-black py-1 shadow-slate-50 shadow-sm rounded-md">
                <div className="flex justify-between text-xl font-bold cursor-pointer" onClick={handleClick}>
                    <span className="pl-1">{title} ({itemCards.length})</span>
                    <span className="pr-5">{showItems == false ? <AiOutlineArrowDown/> : <AiOutlineArrowUp/>}</span>
                </div>
                <div>
                    {showItems && <ItemList items={itemCards}/>}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;