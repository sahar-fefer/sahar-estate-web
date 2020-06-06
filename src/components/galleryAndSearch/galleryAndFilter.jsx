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
    city: ''
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilteredApartments(updateGalleryItems());
        // console.log('filteredApartments', filteredApartments);
    };

    const updateGalleryItems = () => {
        const { city, minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms } = filterBy;
        let updated = apartments;
        if (city) {
            updated = updated.filter(apartment => cities.find(city => city.id === apartment.cityId).label.toLowerCase().includes(city.toLowerCase()));
        }
        if (minPrice) {
            updated = updated.filter(apartment => apartment.price >= minPrice);
        }
        if (maxPrice) {
            updated = updated.filter(apartment => apartment.price <= maxPrice);
        }
        if (minBath) {
            updated = updated.filter(apartment => apartment.number_of_bath >= minBath);
        }
        if (maxBath) {
            updated = updated.filter(apartment => apartment.number_of_bath <= maxBath);
        }
        if (minRooms) {
            updated = updated.filter(apartment => apartment.number_of_rooms >= minRooms);
        }
        if (maxRooms) {
            updated = updated.filter(apartment => apartment.number_of_rooms <= maxRooms);
        }
        console.log('updated', updated);
        return updated;
    };

    const { minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms, city } = filterBy;
    return (
        <div className={"container-fluid"}>
            <ClineFilter
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
            {/* <Filter handleInputChange={handleInputChange} handleSubmit={handleSubmit}
                selectCountry={selectCountry} selectCity={selectCity}
                selectedCountry={state.selectedCountry} selectedCountryName={state.selectedCountryName} selectedCity={state.selectedCity}
                minPrice={minPrice} maxPrice={maxPrice} minBeds={minBeds} maxBeds={maxBeds} minRooms={minRooms} maxRooms={maxRooms}
                resetFilters={resetFilters} countries={state.countries} cities={state.cities} /> */}
            {/* <Filter
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
            <Gallery items={filteredApartments} />
        </div>
    );
};

export default withRouter(GalleryAndFilter);