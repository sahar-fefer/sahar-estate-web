import fetcher from './fetcher';

export const getApartments = async (parameters) => {
    try {
        const { id, city_id, min_price, max_price, min_bath, max_bath, min_room, max_room, sale_status } = parameters;
        const { data: apartments } = await fetcher.get(`/apartments?id=${id ? id : ''}&city_id=${city_id ? city_id : ''}&min_price=${min_price ? min_price : ''}&max_price=${max_price ? max_price : ''}&sale_status=${sale_status ? sale_status : ""}`);
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
        const { data } = await fetcher.put(`/apartments/:${apartment_id}/:${availability}/availability`, formData);
        return data;
    } catch (error) {
        console.dir(error);
        throw error;
    }
}

export const updateApartmentStatus = async (apartment_id, status) => {
    try {
        const { data } = await fetcher.put(`/apartments/:${apartment_id}/:${status}/status`, formData);
        return data;
    } catch (error) {
        console.dir(error);
        throw error;
    }
}
