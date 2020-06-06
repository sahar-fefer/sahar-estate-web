import React from 'react';
// import React, {useState} from 'react';

const BuildImage = ({ currentCard }) => {
    const mainImage = currentCard.main_image;
    const templateImage = `/images/apartments/template`;
    // const [isLoading, setIsLoading] = useState(true);

    const imageStyle = {
        width: "100%",
        height: "170px",
        backgroundImage: `url(${mainImage ? mainImage : templateImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    };

    return (
        <div className={"imageWrapper"} style={imageStyle}>
            {currentCard.status && <div className={"status"}>{currentCard.created_on}</div>}
            {currentCard.price && <h3 className={"price"}>{currentCard.price}</h3>}
            <div className={"heart"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"
                    aria-labelledby="Save Listing" width="40" height="40" tabIndex="-1"
                    className="jsx-2877931502">
                    <path fill="rgba(0,0,0,0.4)" stroke="#fff" strokeWidth="3"
                        d="M20 8.3c4.9-8 18.5-5.9 18.5 5l-.1 1.9c-.8 4.6-4 9.3-8.9 14a66.6 66.6 0 0 1-8.7 7l-.7.6-.8-.5a27.6 27.6 0 0 1-2.8-1.7c-2-1.4-4-3-6-4.7-5.6-5-9-10.3-9-15.8A10 10 0 0 1 20 8.3z"></path>
                </svg>
            </div>
        </div>
    );
};

export default BuildImage;