import React from 'react';

const Details = ({ currentCard }) => {
    return (
        <div className={"infoWrapper container"}>
            <div className={"row"}>
                <div className={"col-auto"}>
                    {currentCard.number_of_bath && `${currentCard.number_of_bath} bath`}
                </div>
                <div className={"col-auto"}>
                    {currentCard.number_of_rooms && `${currentCard.number_of_rooms} rooms`}
                </div>
                <div className={"col-auto"}>
                    {currentCard.sqft && `${currentCard.sqft} sqft`}
                </div>
            </div>
            <span className={"address"}>{currentCard.address && `${currentCard.address}`}</span>
        </div>
    );
};

export default Details;