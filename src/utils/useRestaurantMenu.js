import {useEffect , useState} from 'react';
import { REST_MENU_URL } from '../config/config';

const useRestaurantMenu = (restId)=>{

    let [resData , setResData] = useState();

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData() {
        let url = REST_MENU_URL + `&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`;
        let response = await fetch(url);
        let data = await response.json();
        setResData(data?.data);
    }

    return resData;
}

export default useRestaurantMenu;