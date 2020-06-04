import axios from 'axios';

import storage from './storage';

export const getCountries = async () => {
    if (storage.countries) return storage.countries;
    const { data: countries } = await axios.get('/countries');
    return countries;
}


export const getCountriesWithApartments = async () => {
    if (storage.countries) return storage.countries;
    const { data: countries } = await axios.get('/countries/withApartments');
    return countries;
}

export const getCitiesOfCountry = async countryId => {
    const { data: cities } = await axios.get(`/countries/${countryId}/cities`);
    return cities;
}