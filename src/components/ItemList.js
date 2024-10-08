import { useDispatch } from 'react-redux';
import { REST_MENU_IMG_URL } from '../config/config';
import { AiFillPlusSquare } from "react-icons/ai";
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div>
            {
                items.map((item) => {
                    let data = item?.card?.info;
                    return (
                        <div key={data?.name} className="flex justify-between p-2 border-b border-gray-300 text-left px-4">
                            <div className='w-10/12'>
                                <div className="flex flex-col space-y-0">
                                    <span className="text-lg font-semibold">{data?.name}</span>
                                    <span className="text-sm pt-0 mt-0">Rs.{(data?.price || data?.defaultPrice) / 100}</span>
                                </div>
                                <p className="text-xs">{data?.description}</p>
                            </div>
                            <div className="relative w-2/12 h-auto mt-5">
                                <img src={REST_MENU_IMG_URL + data?.imageId} className="w-full h-auto" />
                                {/* <button className="absolute bottom-0 z-10 mb-2 bg-black text-white px-1 ml-6" onClick={handleAddItem(item)}>ADD +</button> wrong*/}
                                <button className="absolute bottom-0 z-10 mb-2 bg-black text-white px-4 py-2 ml-6 rounded shadow transform transition duration-200 ease-in-out hover:bg-gray-800 active:bg-gray-900 active:scale-95" onClick={() => handleAddItem(item)}>
                                    ADD +
                                </button>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;