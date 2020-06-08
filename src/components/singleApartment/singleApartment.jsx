import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

import Carousel from "./carousel";
import ApartmentDetails from "./apartmentDetails";
import ApartmentMap from "./apartmentMap";

import { apartments } from '../../app-data/apartment-data';
import Footer from '../footer/footer';
import NextOrPrevApartment from './nextOrPrevApartment';

const searchPrevApartment = (curId) => {
    let prevId = parseInt(curId);
    let prev = {};
    
    for (let i = 0; i < apartments.length; i++) {
        if (--prevId >= 0) {
            prev = apartments.find(apartment => parseInt(apartment.id) === prevId);
            if (prev) {
                return prev;
            }
        }
    }
}

const searchNextApartment = (curId) => {
    let nextId = parseInt(curId);
    let next = {};
    for (let i = 0; i < apartments.length; i++) {
        if (++nextId >= 0) {
            next = apartments.find(apartment => parseInt(apartment.id) === nextId);
            if (next) {
                return next;
            }
        }
    }
}

const SingleApartment = () => {
    const { id } = useParams();
    const apartmentData = apartments.find(apartment => parseInt(apartment.id) === parseInt(id));
    const apartmentImages = apartmentData.images;

    const prevApartment = searchPrevApartment(id);
    const nextApartment = searchNextApartment(id);
    return (
        <div id={"apartment"}>
            <div className={"container"}>
                <Carousel apartmentData={apartmentData} apartmentImages={apartmentImages} />
                <div className={'row'}>
                    <ApartmentDetails apartmentData={apartmentData} />
                    <ApartmentMap />
                </div>
                <NextOrPrevApartment type={"prev"} apartment={prevApartment} />
                <NextOrPrevApartment type={"next"} apartment={nextApartment} />}
            </div>
            <Footer />
        </div>
    );
};

export default withRouter(SingleApartment);