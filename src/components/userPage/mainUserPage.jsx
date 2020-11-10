import React, { Component, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import Gallery from '../galleryAndSearch/gallery/gallery';
import AddApartment from './addApartment';

import { getApartmentsUserByStatus } from '../../api/apartments';
import Account from './account';
import { getUserById } from '../../api/users';

const MainUserPage = () => {
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(-1);
    const [chosenOption, setChosenOption] = useState('addApartment');
    const [apartments, setApartments] = useState([]);

    const getUser = async userId => {
        const user = await getUserById(userId);
        console.log('userId', userId);
        setUser(user);
    };

    const getApartments = async userId => {
        const apartments = await getApartmentsUserByStatus(userId, "");
        setApartments(apartments);
    };


    useEffect(() => {
        const user = Cookies.get('auth');
        const userId = JSON.parse(user).id;
        setUserId(userId);
        getApartments(userId, '');
        getUser(userId);
    }, []);

    return (
        <div className={'container mt-4'}>
            <div>
                <button onClick={() => setChosenOption('myApartments')}
                    className={`bottom-line ${chosenOption === 'myApartments' && 'bottom-line-chosed'} pl-1 pr-1 ml-2 mr-2`}>
                    My Apartments
                </button>
                <button onClick={() => setChosenOption('addApartment')}
                    className={`bottom-line ${chosenOption === 'addApartment' && 'bottom-line-chosed'} pl-1 pr-1 ml-2 mr-2`}>
                    Add Apartment
                </button>
                <button
                    onClick={() => setChosenOption('profile')}
                    className={`bottom-line ${chosenOption === 'profile' && 'bottom-line-chosed'} pl-1 pr-1 ml-2 mr-2`}>
                    My Profile
                </button>
                <button onClick={() => setChosenOption('savedHomes')}
                    className={`bottom-line ${chosenOption === 'savedHomes' && 'bottom-line-chosed'} pl- pr-1 ml-2 mr-2`}>
                    Saved Homes
                </button>
            </div>
            <div>
                {
                    chosenOption === 'myApartments' &&
                    <Gallery items={apartments}
                        title={'Apdate And Edit My Apartments'} />

                }
                {
                    chosenOption === 'addApartment' &&
                    <AddApartment userId={userId} />
                }
                {
                    chosenOption === 'profile' &&
                    <Account user={user} />

                }
                {
                    chosenOption === 'savedHomes' &&
                    <div>
                        Saved Apartment
                    </div>
                }
            </div>
        </div>
    )
}
export default MainUserPage;