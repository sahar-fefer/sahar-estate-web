import React from 'react';

const ApartmentDetails = ({ apartmentData }) => {
    const { price, number_of_baths, number_of_rooms, sqft, address, sale_status, description } = apartmentData;
    // console.log('apartmentData', apartmentData);
    return (
        <div className={"apartmentDetails col-auto"}>
            <div className={''}>
                {
                    price &&
                    <h3 className={''} style={{ fontWeight: "bold" }}>{price && `$${price}`}</h3>
                }
            </div>
            <div className={"row m-1 ml-0"}>
                <div className={"col-auto pl-0"}>{number_of_baths && `${number_of_baths} Baths`}</div>
                <div className={`col-auto ${!number_of_baths && 'pl-0'}`}>{number_of_rooms && `${number_of_rooms} Rooms`}</div>
                <div className={`col-auto ${!number_of_baths & !number_of_rooms && 'pl-0'}`}>{sqft && `${sqft} Sqft`}</div>
            </div>
            <div className={""}>
                <div className={"m-1"}>{address && address} </div>
                <div className={"m-1"}>{description && description} </div>
            </div>
        </div>
    );
};

export default ApartmentDetails;