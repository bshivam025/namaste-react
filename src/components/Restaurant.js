import { IMG_CDN_URL } from '../config/config.js';

const Restaurant = ({ RestaurantName, RestaurantCuisines, RestaurantRating, RestaurantDeliveryTime, RestaurantImage }) => {
    let classRating = "text-gray-500";
    if (RestaurantRating > 4) {
        classRating = 'text-green-500';
    } else if (RestaurantRating > 3) {
        classRating = 'text-orange-500';
    } else {
        classRating = 'text-red-500';
    }

    return (
        <div className='restaurant-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl mb-12 mt-2 w-3/4 h-fit min-h-40 flex flex-col justify-between'>
            <div className='restaurant-image mb-4 h-4/5'>
                <img src={IMG_CDN_URL + RestaurantImage} alt={RestaurantName} className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='restaurant-info flex-grow flex flex-col justify-between'>
                <div>
                    <div className='restaurant-name mb-2'>
                        <h3 className='text-lg text-gray-600 font-semibold truncate'>{RestaurantName}</h3>
                    </div>
                    <div className='restaurant-cuisines mb-2'>
                        <h4 className='text-gray-600 truncate'>{RestaurantCuisines}</h4>
                    </div>
                </div>
                <div>
                    <div className='restaurant-rating mb-2'>
                        <h4 className={classRating}>{RestaurantRating} Stars</h4>
                    </div>
                    <div className='restaurant-delivery-time'>
                        <h4 className='text-gray-600'>{RestaurantDeliveryTime}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const RestaurantMod = (Restaurant) => {
    return ({ RestaurantName, RestaurantCuisines, RestaurantRating, RestaurantDeliveryTime, RestaurantImage }) => {
        let promotedLabel;

        if (RestaurantRating > 4) {
            promotedLabel = (
                <label className="absolute top-0 left-0 bg-green-600 text-white px-2 py-1 rounded-lg shadow-md font-semibold z-10">
                    Highly Rated
                </label>
            );
        } 

        return (
            <div className="relative py-1">
                <div className="relative">
                    <Restaurant 
                        RestaurantName={RestaurantName} 
                        RestaurantCuisines={RestaurantCuisines} 
                        RestaurantRating={RestaurantRating} 
                        RestaurantDeliveryTime={RestaurantDeliveryTime} 
                        RestaurantImage={RestaurantImage} 
                    />
                </div>
                {promotedLabel}
            </div>
        );
    };
};





export default Restaurant;
