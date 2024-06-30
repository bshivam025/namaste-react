import { REST_MENU_IMG_URL } from '../config/config';

const ItemList = ({items}) => {
    return (
        <div>
            {
                items.map((item)=>{
                    let data = item?.card?.info;
                    return (
                        <div key = {data?.name} className="flex justify-between p-2 border-b border-gray-300 text-left px-4">
                            <div className='w-10/12'> 
                            <div className="flex flex-col space-y-0">
                                <span className="text-lg font-semibold">{data?.name}</span>
                                <span className="text-sm pt-0 mt-0">Rs.{(data?.price || data?.defaultPrice)/100}</span>
                            </div> 
                            <p className="text-xs">{data?.description}</p>
                            </div>
                            <div className='w-2/12 h-auto mt-5'> 
                                <img src={REST_MENU_IMG_URL + data?.imageId}></img>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;