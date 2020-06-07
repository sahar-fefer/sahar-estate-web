import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

import Carousel from "./carousel";
import NextOrPrevApartment from "./nextOrPrevApartment";
import ApartmentDetails from "./apartmentDetails";
import ApartmentMap from "./apartmentMap";

import { apartments } from '../../app-data/apartment-data';

const SingleApartment = () => {
    const { id } = useParams();
    const apartmentData = apartments.find(apartment => parseInt(apartment.id) === parseInt(id));
    const apartmentImages = apartmentData.images;
    // console.log('apartmentData', apartmentData);
    console.log('apartmentData', apartmentData.images);
    return (
        <div id={"apartment"}>
            <div className={"container"}>
                <h1>{apartmentData.title}</h1>
                <Carousel apartmentData={apartmentData} apartmentImages={apartmentImages} />
                <ApartmentDetails apartmentData={apartmentData} />
                <ApartmentMap />
            </div>
        </div>
    );
};

export default withRouter(SingleApartment);