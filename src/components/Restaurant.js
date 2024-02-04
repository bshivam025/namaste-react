import {IMG_CDN_URL} from '../config/config.js';

let Restaurant = ({RestaurantName,RestaurantCuisines,RestaurantRating,RestaurantDeliveryTime,RestaurantImage}) => {
    let classRating = "kuch bhi";
    if(RestaurantRating > 4){
        classRating = 'green';
    } else if(RestaurantRating > 3){
        classRating = 'orange';
    } else {
        classRating = 'red';
    }
    return (
        <div className='restaurant-card' onClick={()=>{console.log("clicked")}}>
            <div className='restaurant-image'>
                <img src={IMG_CDN_URL + RestaurantImage} />
            </div>
            <div className='restaurant-info'>
                <div className='restaurant-name'>
                    <h3>{RestaurantName}</h3>
                </div>
                <div className='restaurant-cuisines'>
                    <h4>{RestaurantCuisines}</h4>
                </div>
                <div className='restaurant-rating'>
                    <h4 className = {classRating}>{RestaurantRating} Stars</h4>
                </div>
                <div className='restaurant-delivery-time'>
                    <h4>{RestaurantDeliveryTime}</h4>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;