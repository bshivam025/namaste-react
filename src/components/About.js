import { useEffect, useState } from "react";
import { DOGGO_IMG_URL } from "../config/config";
const About = () => {
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

    return (
        <div className="error-container">
            <h1 className="error-heading">We are A fake food Delivery app.</h1>
            <p className="error-message">The dog is cute though.</p>
            <div className="error-image-container">
                {doggoImage && <img src={doggoImage} alt="doggo" className="error-doggo-image" />}
            </div>
        </div>
    );
}

export default About;
