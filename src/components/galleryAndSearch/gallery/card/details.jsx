import React from 'react';

const Details = () => {
    const { currentCard } = this.props;

    return (
        <div className={"infoWrapper container"}>
            <div className={"row"}>
                <div
                    className={"col-auto numBeds"}>{currentCard.number_of_beds && `${currentCard.number_of_beds} beds`}</div>
                <div
                    className={"col-auto numRooms"}>{currentCard.number_of_rooms && `${currentCard.number_of_rooms} rooms`}</div>
                <div className={"col-auto sqft"}>{currentCard.sqft && `${currentCard.sqft} sqft`}</div>
            </div>
            <span className={"address"}>{currentCard.address && `${currentCard.address}`}</span>
        </div>
    );
};

export default Details;