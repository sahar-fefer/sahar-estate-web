import React, { useEffect, useState } from 'react';
import { useParams, withRouter, useLocation } from 'react-router-dom';

import Carousel from "./carousel";
import ApartmentDetails from "./apartmentDetails";
import ApartmentMap from "./apartmentMap";

import { getApartments, getApartmentImages } from '../../api/apartments';
import Footer from '../footer/footer';
import NextOrPrevApartment from './nextOrPrevApartment';
import { getCitiesById } from '../../api/cities';

let items = [];

const searchPrevApartment = (curId) => {
    let prevId = parseInt(curId);
    let prev = {};

    for (let i = 0; i < items.length; i++) {
        if (--prevId >= 0) {
            prev = items.find(item => parseInt(item.id) === prevId);
            if (prev) {
                return prev;
            }
        }
    }
}

const searchNextApartment = (curId) => {
    let nextId = parseInt(curId);
    let next = {};
    for (let i = 0; i < items.length; i++) {
        if (++nextId >= 0) {
            next = items.find(item => parseInt(item.id) === nextId);
            if (next) {
                return next;
            }
        }
    }
}

const SingleApartment = () => {
    const [apartmentData, setApartmentData] = useState({});
    const [apartmentCity, setApartmentCity] = useState({});
    const [apartmentImages, setApartmentImages] = useState([]);
    const [forcrRender, setForcrRender] = useState(0);
    // const [items, setItems] = useState([]);
    // const [images, setImages] = useState(1);

    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        fetchApartment();
    }, [id])

    useEffect(() => {
        fetchCityOfApartment();
    }, [apartmentData])

    useEffect(() => {
        items = location.state.items;
    }, [location]);

    // useEffect(() => {
    // const main_image = apartmentData.main_image;
    // console.log('main_image', apartmentData.main_image);
    // main_image && setApartmentImages({ url: main_image }, ...apartmentImages);
    // }, [images])

    const fetchApartment = async () => {
        const apartment = await getApartments({ id, page: 1, size: 1 });
        setApartmentData(apartment[0]);
        setApartmentImages(await getApartmentImages(id));
        // setImages(images+1)
    }

    const fetchCityOfApartment = async () => {
        const city = await getCitiesById(apartmentData.city_id);
        setApartmentCity(city[0]);
    }

    const prevApartment = searchPrevApartment(id);
    const nextApartment = searchNextApartment(id);
    return (
        <div id={"apartment"}>
            <div className={"container"}>
                <Carousel apartmentData={apartmentData} apartmentImages={apartmentImages} apartmentCity={apartmentCity} />
                <div className={'row'}>
                    <ApartmentDetails apartmentData={apartmentData} />
                    <ApartmentMap />
                </div>
                {
                    prevApartment &&
                    <NextOrPrevApartment type={"prev"} apartment={prevApartment} items={items} />
                }
                {
                    nextApartment &&
                    <NextOrPrevApartment type={"next"} apartment={nextApartment} items={items} />
                }
            </div>
            <Footer />
        </div>
    );
};

export default withRouter(SingleApartment);