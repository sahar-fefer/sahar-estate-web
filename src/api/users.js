import fetcher from './fetcher';

export const getUserById = async (id) => {
    try {
        const { data } = await fetcher.get(`/users/${id}`);
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getUserByEmail = async (email) => {
    try {
        const { data } = await fetcher.get(`/users/${email}`);
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const logIn = async (email, password) => {
    console.log("email", email, "password", password);
    try {
        const { data } = await fetcher.post(`/users/login`, {email, password});
        loginSubscribers.forEach(sub => sub());
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const loginSubscribers = [];

export const subscribeLogin = cb => {
    loginSubscribers.push(cb);
}
