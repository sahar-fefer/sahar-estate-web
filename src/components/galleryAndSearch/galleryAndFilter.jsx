import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

// import { getCountries, getCountriesWithApartments, getCitiesOfCountry } from '../../api/countries-cities';
// import { getApartments, getApartmentsByCountry, getApartmentsByCountryAndSaleStatus, getApartmentsByCountryOrAndSaleStatus } from '../../api/apartments';

import ClineFilter from './filter/clineFilter';
import Gallery from './gallery/gallery';

import { apartments } from '../../app-data/apartment-data';

const GalleryAndFilter = () => {
    console.log('apartments', apartments);
    // async componentDidMount() {
    //     const selectedCountry = this.props.location.state.selectedCountry ? this.props.location.state.selectedCountry : "";
    //     const selectedCountryName = this.props.location.state.selectedCountryName ? this.props.location.state.selectedCountryName : "";
    //     const sale_status = this.props.location.state.sale_status ? this.props.location.state.sale_status : "";
    //     // const countries = await getCountriesWithApartments();
    //     const countries = await getCountries();

    //     // const country_id = selectedCountry;
    //     const apartments = await getApartments({ country_id: selectedCountry, sale_status });
    //     // const apartments = await getApartmentsByCountryAndSaleStatus(selectedCountry, sale_status);
    //     // const apartments = await getApartments(selectedCountry, sale_status);
    //     // const apartments = await getApartmentsByCountry(selectedCountry);
    //     const cities = selectedCountry ? await getCitiesOfCountry(selectedCountry) : [];
    //     this.setState({
    //         selectedCountry,
    //         selectedCountryName,
    //         countries,
    //         cities,
    //         sale_status,
    //         apartments,
    //         filteredApartments: apartments
    //     });
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.updateGalleryItems();
    // };

    // handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     this.setState({
    //         filterBy: {
    //             ...this.state.filterBy,
    //             [name]: value
    //         }
    //     }, console.log("filterBy", this.state.filterBy))
    // };

    // updateGalleryItems = async () => {
    //     const filteredApartments = await getApartments(this.state.filterBy);
    //     this.setState({
    //         filteredApartments
    //     });
    // }

    // selectCountry = async (e) => {
    //     const country_id = e.target.value;
    //     const cities = await getCitiesOfCountry(country_id);
    //     this.setState({
    //         cities
    //     });

    //     // if(country_id) {
    //     //     const apartments = await getApartmentsByCountry(country_id);
    //     //     const selectedCountryName = this.state.countries.find(country => country.id == country_id).name;
    //     //     this.setState({
    //     //         filteredApartments: apartments,
    //     //         selectedCountryName,
    //     //         selectedCountry: country_id
    //     //     }, async () => {
    //     //         const cities = await getCitiesOfCountry(country_id);
    //     //         this.setState({
    //     //             cities
    //     //         });
    //     //     });
    //     // } else {
    //     //     const apartments = await allApartments();
    //     //     this.setState({
    //     //         filteredApartments: apartments,
    //     //     })
    //     // }
    // }

    // selectCity = async (e) => {
    //     const city_id = e.target.value;
    //     const filterBy = this.state.filterBy;
    //     filterBy['city_id'] = city_id;
    //     // if (city_id) {
    //     //     const apartments = await getApartments(argument);
    //     //     this.setState({
    //     //         filteredApartments: apartments,
    //     //         selectedCity: city_id,
    //     //         filterBy
    //     //     });
    //     // } else {
    //     //     const apartments = await getApartmentsByCountry(this.state.selectedCountry);
    //     //     this.setState({
    //     //         filteredApartments: apartments,
    //     //         selectedCity: city_id
    //     //     });
    //     // }
    // }

    const filterBy = {};

    const filterReducer = (state = filterBy, action) => {
        switch (action.type) {
            case 'minPrice':
                return { ...state, 'minPrice': action.value };
            case 'maxPrice':
                return { ...state, 'minPrice': action.value };
            case 'minPrice':
                return { ...state, 'maxPrice': action.value };
            case 'minBath':
                return { ...state, 'minBath': action.value };
            case 'maxBath':
                return { ...state, 'maxBath': action.value };
            case 'minRooms':
                return { ...state, 'minRooms': action.value };
            case 'maxRooms':
                return { ...state, 'maxRooms': action.value };
            case 'saleStatus':
                return { ...state, 'saleStatus': action.value };
            case 'countryId':
                return { ...state, 'selectedCountry': action.value }
            case 'cityId':
                return { ...state, 'selectedCity': action.value }
        }
    } // onClick={() => dispatch({ type: 'minBath', value: '2' })}

    // apartments: [],
    // filteredApartments: [],
    // selectedCountryName: "",
    // countries: [],
    // cities: []

    return (
        <div className={"container-fluid"}>
            <ClineFilter />
            {/* <Filter handleInputChange={handleInputChange} handleSubmit={handleSubmit}
                selectCountry={selectCountry} selectCity={selectCity}
                selectedCountry={state.selectedCountry} selectedCountryName={state.selectedCountryName} selectedCity={state.selectedCity}
                minPrice={minPrice} maxPrice={maxPrice} minBeds={minBeds} maxBeds={maxBeds} minRooms={minRooms} maxRooms={maxRooms}
                resetFilters={resetFilters} countries={state.countries} cities={state.cities} /> */}

            <Gallery items={apartments} />
            {/* items={filteredApartments} */}
        </div>
    );
};

export default withRouter(GalleryAndFilter);