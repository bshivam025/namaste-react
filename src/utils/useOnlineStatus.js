import { useEffect, useState } from "react";

const useOnlineStatus = () => {
console.log("remder");
    let [onlineStatus, setOnlineStatus ] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
    },)

    return onlineStatus;

}

export default useOnlineStatus;