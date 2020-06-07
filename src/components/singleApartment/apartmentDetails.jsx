import React from 'react';

const ApartmentDetails = ({ apartmentData }) => {
    const { price, number_of_bath, number_of_rooms, sqft, address } = apartmentData;
    return (
        <div className={"apartmentDetails col-auto"}>
            <h3 style={{ fontWeight: "bold" }}>{price && `$${price}`}</h3>
            <div className={"row"}>
                <div
                    className={"col-auto numBath"}>{number_of_bath && `${number_of_bath} Bath`}</div>
                <div
                    className={"col-auto numRooms"}>{number_of_rooms && `${number_of_rooms} Rooms`}</div>
                <div
                    className={"col-auto sqft"}>{sqft && `${sqft} Sqft`}</div>
            </div>
            <div className={"row"}>
                <div
                    className={"col-auto"}>{address && address}
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetails;