import React, { useState, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

import Gallery from './gallery/gallery';
import Footer from '../footer/footer';

import { getApartments } from '../../api/apartments';
import { getCities } from '../../api/cities';

import Filter from './filter/filter';

const GalleryAndFilter = () => {
    const [filterBy, setFilterBy] = useState({
        id: '',
        city_id: '',
        min_price: '',
        max_price: '',
        min_bath: '',
        max_bath: '',
        min_rooms: '',
        max_rooms: '',
        property_type: '',
        sale_status: '',
        page: 1,
        size: 6
    });
    const [filteredApartments, setFilteredApartments] = useState([]);
    const [cities, setCities] = useState([]);
    const [locationEffect, setLocationEffect] = useState(0);
    const location = useLocation();

    // const { city_id, saleStatus } = location.state;

    useEffect(() => {
        const { selectedCityId, saleStatus } = location.state;
        if (selectedCityId || saleStatus) {
            setFilterBy({
                ...filterBy,
                city_id: selectedCityId ? selectedCityId : '',
                sale_status: saleStatus ? saleStatus : ''
            })
            setLocationEffect(locationEffect + 1)
        } else {
            fetchApartments();
        }
    }, [location]);

    useEffect(() => {
        fetchApartments();
    }, [locationEffect])

    useEffect(() => {
        fetchCities();
    }, [])

    const fetchCities = async () => {
        setCities(JSON.parse(localStorage.getItem('cities')) || await getCities())
    }

    const fetchApartments = async () => {
        const apartm = await getApartments({ ...filterBy });
        console.log('filterBy', filterBy);
        console.log('apartments', apartm);
        setFilteredApartments(await getApartments({ ...filterBy }));
    }

    const handleInputChange = (e) => {
        setFilterBy({
            ...filterBy,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchApartments({ ...filterBy });
    };

    const nextPrevApartments = (type) => {
        setFilterBy({
            ...filterBy,
            page: type === "+" ? filterBy.page + 1 : filterBy.page - 1
        })
        setLocationEffect(locationEffect + 1);
    }

    const sizeGallery = (e) => {
        setFilterBy({
            ...filterBy,
            size: e.target.value
        })
        setLocationEffect(locationEffect + 1);
    }
    // console.log('filterBy', filterBy);
    return (
        <div>
            <div className={"container-fluid"}>
                <Filter
                    cities={cities}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    {...filterBy} />
                <Gallery items={filteredApartments}
                    sizeGallery={sizeGallery}
                    nextPrevApartments={nextPrevApartments}
                    page={filterBy.page}
                    size={filterBy.size} />
            </div>
            <Footer />
        </div>
    );
};

export default withRouter(GalleryAndFilter);