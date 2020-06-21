import fetcher from './fetcher';

export const getAllUsers = async (id) => {
    try {
        const { data } = await fetcher.get(`/users`);
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getUserById = async (id) => {
    try {
        const { data } = await fetcher.get(`/users/${id}`);
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

// export const getUserByEmail = async (email) => {
//     try {
//         const { data } = await fetcher.get(`/users/${email}`);
//         return data;
//     } catch (error) {
//         console.log(error)
//         throw error;
//     }
// }

export const editUser = async (id, dataUser) => {
    try {
        const { data } = await fetcher.put(`/users/${id}`, dataUser);
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const addUser = async (userDate) => {
    try {
        const { role_id, first_name, last_name, email, password, phone } = userDate
        const { data } = await fetcher.post(`/users?role_id=${role_id ? role_id : ''}&first_name=${first_name ? first_name : ''}&last_name=${last_name ? last_name : ''}&email=${email ? email : ''}&password=${password ? password : ''}&phone=${phone ? phone : ''};`);
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const logIn = async (email, password) => {
    console.log("email", email, "password", password);
    try {
        const { data } = await fetcher.post(`/users/login`, { email, password });
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
