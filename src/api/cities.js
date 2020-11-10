import fetcher from './fetcher';

export const getCitiesWithApartments = async () => {
    const { data: cities } = await fetcher.get('/cities/withApartments');
    return cities;
}

export const getCitiesById = async cityId => {
    const { data: cities } = await fetcher.get(`/cities/${cityId}`);
    return cities;
}

export const getCities = async () => {
    const { data: cities } = await fetcher.get('/cities');
    return cities;
}

