import React, { Component, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import Gallery from '../galleryAndSearch/gallery/gallery';

import { getApartmentsUserByStatus } from '../../api/apartments';
import Account from './account';
import { getUserById } from '../../api/users';

const MainUserPage = () => {
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(-1);
    const [chosenOption, setChosenOption] = useState('myApartments');
    const [apartments, setApartments] = useState([]);

    const getUser = async userId => {
        const user = await getUserById(userId);
        setUser(user);
    };

    const getApartmets = async userId => {
        const apartmets = await getApartmentsUserByStatus(userId, "");
        setApartments(apartments);
    };


    useEffect(() => {
        const user = Cookies.get('auth');
        const userId = JSON.parse(user).id;
        setUserId(userId);
        getApartmets(userId, '');
        getUser(userId);
    }, []);

    return (
        <div className={'container mt-4'}>
            <ul className={'row p-0'}>
                <li
                    className={`col-auto`}
                    onClick={() => {
                        setChosenOption('myApartments')
                    }}>
                    <div className={`bottom-line ${chosenOption === 'myApartments' && 'bottom-line-chosed'} pl-1 pr-1`}>
                        My Apartments
                    </div>
                </li>
                <li
                    className={`col-auto`}
                    onClick={() => {
                        setChosenOption('addApartment')
                    }}>
                    <div className={`bottom-line ${chosenOption === 'addApartment' && 'bottom-line-chosed'} pl-1 pr-1`}>
                        Add Apartment
                    </div>
                </li>
                <li
                    className={`col-auto`}
                    onClick={() => {
                        setChosenOption('profile')
                    }}>
                    <div className={`bottom-line ${chosenOption === 'profile' && 'bottom-line-chosed'} pl-1 pr-1`}>
                        My Profile
                    </div>
                </li>
                <li
                    className={`col-auto`}
                    onClick={() => {
                        setChosenOption('savedHomes')
                    }}>
                    <div className={`bottom-line ${chosenOption === 'savedHomes' && 'bottom-line-chosed'} pl-1 pr-1`}>
                        Saved Homes
                    </div>
                </li>
            </ul>
            <div>
                {
                    chosenOption === 'myApartments' &&
                    <Gallery items={apartments}
                        title={'Apdate And Edit My Apartments'} />

                }
                {
                    chosenOption === 'addApartment' &&
                    <div>
                        Add New Apartment
                    </div>
                }
                {
                    chosenOption === 'profile' &&
                    <Account user={user}/>

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