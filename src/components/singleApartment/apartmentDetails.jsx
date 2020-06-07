import React from 'react';

function ApartmentDetails(props) {
    const {apartmentData} = props;
    return (
        <div className={"apartmentDetails"}>
            <h3 style={{fontWeight: "bold"}}>{apartmentData.price}</h3>
            <div className={"row"}>
                <div
                    className={"col-auto numBeds"}>{apartmentData.number_of_beds && `${apartmentData.number_of_beds} beds`}</div>
                <div
                    className={"col-auto numRooms"}>{apartmentData.number_of_rooms && `${apartmentData.number_of_rooms} rooms`}</div>
                <div
                    className={"col-auto sqft"}>{apartmentData.sqft && `${apartmentData.sqft} sqft`}</div>
            </div>
            <div className={"row"}>
                <div
                    className={"col-auto"}>{apartmentData.address && apartmentData.address}
                </div>
            </div>
        </div>
    );
}

export default ApartmentDetails;