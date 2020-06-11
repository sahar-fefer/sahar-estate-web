import React, { useState, useReducer, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

// import { getCountries, getCountriesWithApartments, getCitiesOfCountry } from '../../api/countries-cities';
// import { getApartments, getApartmentsByCountry, getApartmentsByCountryAndSaleStatus, getApartmentsByCountryOrAndSaleStatus } from '../../api/apartments';

import Gallery from './gallery/gallery';

// import { apartments } from '../../app-data/apartment-data';
// import { cities } from '../../app-data/cities-data';
import Filter from './filter/filter';

const initialFilter = {
    minPrice: '',
    maxPrice: '',
    minBath: '',
    maxBath: '',
    minRooms: '',
    maxRooms: '',
    property_type: ''
};

const filterReducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}

const GalleryAndFilter = () => {
    const [filterBy, dispatch] = useReducer(filterReducer, initialFilter);
    const [filteredApartments, setFilteredApartments] = useState([]);
    const location = useLocation();

    const { selectedCityId,
        saleStatus,
        cities,
        apartments } = location.state;

    useEffect(() => {
        if (location.state.selectedCityId) {
            setFilteredApartments(apartments.filter(apartment => apartment.cityId === parseInt(location.state.selectedCityId)))
        } else {
            setFilteredApartments(apartments)
        }
    }, [location]);

    const handleInputChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilteredApartments(updateGalleryItems());
    };

    const updateGalleryItems = () => {
        const { property_type, minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms } = filterBy;
        let updated = apartments;
        if (selectedCityId) {
            updated = updated.filter(apartment => apartment.cityId === parseInt(selectedCityId));
        }
        // if (SaleStatus) {
        //     updated = updated.filter(apartment => apartment.for_rent === SaleStatus);
        // }
        if (property_type) {
            updated = updated.filter(apartment => apartment.property_type === property_type);
        }
        if (minPrice) {
            updated = updated.filter(apartment => apartment.price >= parseInt(minPrice));
        }
        if (maxPrice) {
            updated = updated.filter(apartment => apartment.price <= parseInt(maxPrice));
        }
        if (minBath) {
            updated = updated.filter(apartment => apartment.number_of_bath >= parseInt(minBath));
        }
        if (maxBath) {
            updated = updated.filter(apartment => apartment.number_of_bath <= parseInt(maxBath));
        }
        if (minRooms) {
            updated = updated.filter(apartment => apartment.number_of_rooms >= parseInt(minRooms));
        }
        if (maxRooms) {
            updated = updated.filter(apartment => apartment.number_of_rooms <= parseInt(maxRooms));
        }
        return updated;
    };

    const { minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms, city } = filterBy;
    return (
        <div className={"container-fluid"}>
            <Filter
                cities={cities}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                selectedCityId={selectedCityId}
                minPrice={minPrice}
                maxPrice={maxPrice}
                minBath={minBath}
                maxBath={maxBath}
                minRooms={minRooms}
                maxRooms={maxRooms}
                city={city} />
            <Gallery items={filteredApartments} />
        </div>
    );
};

export default withRouter(GalleryAndFilter);