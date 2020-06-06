import React, { useState, useReducer } from 'react';
import { withRouter } from 'react-router-dom';

// import { getCountries, getCountriesWithApartments, getCitiesOfCountry } from '../../api/countries-cities';
// import { getApartments, getApartmentsByCountry, getApartmentsByCountryAndSaleStatus, getApartmentsByCountryOrAndSaleStatus } from '../../api/apartments';

import ClineFilter from './filter/clineFilter';
import Gallery from './gallery/gallery';

import { apartments } from '../../app-data/apartment-data';
import { cities } from '../../app-data/cities-data';
import Filter from './filter/filter';

const initialFilter = {
    minPrice: '',
    maxPrice: '',
    minBath: '',
    maxBath: '',
    minRooms: '',
    maxRooms: '',
    property_type: '',
    city_id: ''
};

const filterReducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}

const GalleryAndFilter = () => {
    const [filterBy, dispatch] = useReducer(filterReducer, initialFilter);
    const [filteredApartments, setFilteredApartments] = useState(apartments);

    const handleInputChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
        console.log('filterBy', filterBy);
        // console.log('e.target.name', e.target.name);
        // console.log('e.target.value', e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('filterBy', filterBy);
        setFilteredApartments(updateGalleryItems());
        // console.log('filteredApartments', filteredApartments);
    };

    const updateGalleryItems = () => {
        const { city_id, property_type, minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms } = filterBy;
        let updated = apartments;
        if (city_id) {
            updated = updated.filter(apartment => apartment.cityId === parseInt(city_id));
        }
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
        console.log('updated', updated);
        return updated;
    };

    const { minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms, city } = filterBy;
    return (
        <div className={"container-fluid"}>
            {/* <ClineFilter
                cities={cities}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                minPrice={minPrice}
                maxPrice={maxPrice}
                minBath={minBath}
                maxBath={maxBath}
                minRooms={minRooms}
                maxRooms={maxRooms}
                city={city} /> */}
            {/* <Filter handleInputChange={handleInputChange} handleSubmit={handleSubmit}
                selectCountry={selectCountry} selectCity={selectCity}
                selectedCountry={state.selectedCountry} selectedCountryName={state.selectedCountryName} selectedCity={state.selectedCity}
                minPrice={minPrice} maxPrice={maxPrice} minBeds={minBeds} maxBeds={maxBeds} minRooms={minRooms} maxRooms={maxRooms}
                resetFilters={resetFilters} countries={state.countries} cities={state.cities} /> */}
            <Filter
                cities={cities}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
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