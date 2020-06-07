import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

import Carousel from "./carousel";
import NextOrPrevApartment from "./nextOrPrevApartment";
import ApartmentDetails from "./apartmentDetails";
import ApartmentMap from "./apartmentMap";

import { apartments } from '../../app-data/apartment-data';
import Footer from '../footer/footer';

const SingleApartment = () => {
    const { id } = useParams();
    const apartmentData = apartments.find(apartment => parseInt(apartment.id) === parseInt(id));
    const apartmentImages = apartmentData.images;
    return (
        <div id={"apartment"}>
            <div className={"container"}>
                <Carousel apartmentData={apartmentData} apartmentImages={apartmentImages} />
                <div className={'row'}>
                    <ApartmentDetails apartmentData={apartmentData} />
                    <ApartmentMap />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default withRouter(SingleApartment);