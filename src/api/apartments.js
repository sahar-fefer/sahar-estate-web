import fetcher from './fetcher';

export const getApartments = async ({ id, city_id, min_price, max_price, min_baths, max_baths, min_rooms, max_rooms, property_type, sale_status, page, size }) => {
    try {
        // console.log( propertyType, sale_status', id, city_id, min_price, max_price, min_baths, max_baths, min_rooms, max_rooms, property_type, sale_status);
        // console.log('id', id);
        // console.log('city_id', city_id);
        // console.log('city_id', city_id);
        // console.log('min_price', min_price);
        // console.log('max_price', max_price);
        // console.log('min_rooms', min_rooms);
        // console.log('max_rooms', max_rooms);
        // console.log('min_baths', min_baths);
        // console.log('max_baths', max_baths);
        // console.log('property_type', property_type);
        // console.log('sale_status', sale_status);
        // console.log('page', page);
        // console.log('size', size);
        const { data: apartments } = await fetcher.get(`/apartments?id=${id ? id : ''}&city_id=${city_id ? city_id : ''}&min_price=${min_price ? min_price : ''}&max_price=${max_price ? max_price : ''}&min_baths=${min_baths ? min_baths : ''}&max_baths=${max_baths ? max_baths : ''}&min_rooms=${min_rooms ? min_rooms : ''}&max_rooms=${max_rooms ? max_rooms : ''}&property_type=${property_type ? property_type : ''}&sale_status=${sale_status ? sale_status : ""}&page=${page ? page : ""}&size=${size ? size : ""}`);
        return apartments;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const allApartments = async () => {
    try {
        const { data: apartments } = await fetcher.get(`/apartments`)
        return apartments;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getApartmentsBySaleStatus = async (SaleStatus) => {
    try {
        const { data: apartments } = await fetcher.get(`/apartments?SaleStatus=${SaleStatus}`);
        return apartments;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getApartmentImages = async (apartment_id) => {
    try {
        const { data: images } = await fetcher.get(`/apartments/${apartment_id}/images`);
        return images;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getApartmentsUser = async (user_id) => {
    try {
        const { data: apartments } = await fetcher.get(`/apartments/${user_id}`)
        return apartments;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getApartmentsUserByStatus = async (user_id, status) => {
    try {
        const { data: apartments } = await fetcher.get(`/apartments/${user_id}/${status}`)
        return apartments;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const addApartment = async (formData) => {
    try {
        const { data } = await fetcher.post(`/apartments`, formData);
        return data;
    } catch (error) {
        console.dir(error);
        throw error;
    }
}

export const updateAvailabilityApartment = async (apartment_id, availability) => {
    try {
        const { data } = await fetcher.put(`/apartments/:${apartment_id}/:${availability}/availability`, apartment_id, availability);
        return data;
    } catch (error) {
        console.dir(error);
        throw error;
    }
}

export const updateApartmentStatus = async (apartment_id, status) => {
    try {
        const { data } = await fetcher.put(`/apartments/:${apartment_id}/:${status}/status`, apartment_id, status);
        return data;
    } catch (error) {
        console.dir(error);
        throw error;
    }
}
