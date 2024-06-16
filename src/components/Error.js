import { useEffect, useState } from "react";
import { DOGGO_IMG_URL } from "../config/config";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const [doggoImage, setDoggoImage] = useState('');

    useEffect(() => {
        const getDoggo = async () => {
            try {
                let response = await fetch(DOGGO_IMG_URL);
                let data = await response.json(); // Parse the JSON response
                setDoggoImage(data.message); // Assuming 'data.message' contains the image URL
            } catch (error) {
                console.error("Error fetching doggo image:", error);
            }
        };

        getDoggo();
    }, []);

    const err  = useRouteError();
    console.log("🫡 ~ Error ~ err:", err);

    return (
        <div className="error-container">
            <h1 className="error-heading">Oops! Something went wrong.</h1>
            <p className="error-message">It seems that there was an error while processing your request. Please try again later.</p>
            <div className="error-image-container">
                {doggoImage && <img src={doggoImage} alt="doggo" className="error-doggo-image" />}
            </div>
            <div>
                <h3>
                    Error : {err.status}
                </h3>
                <br />
                <h3>
                    Message : {err.data}
                </h3>
            </div>
        </div>
    );
}

export default Error;
