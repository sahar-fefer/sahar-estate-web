import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { getRentSaleApartments } from '../../api/apartments';

import HomeSearch from './homeSearch';
import InfoLine from './infoLine';
import Footer from '../footer/footer';

const Home = ({ title, description }) => {
    const [userContact, setUserContact] = useState('');
    const [rentOrSale, setRentOrSale] = useState({});
    useEffect(() => {
        getRentOrSale();
    }, [])

    const getRentOrSale = async () => {
        const rentOrSale = await getRentSaleApartments();
        setRentOrSale(rentOrSale);
    }

    useEffect(() => {
        const cookie = Cookies.get('auth');
        if (cookie) {
            setUserContact(cookie)
        };
    })

    const info = [
        {
            number: rentOrSale.sale,
            description: 'Homes For Sale',
            type: 'sale'
        },
        {
            number: rentOrSale.rent,
            description: 'Homes For Rent',
            type: 'rent'

        }]

    return (
        <div id="home">
            <HomeSearch title={title} description={description} />
            <InfoLine info={info} />
            <Footer />
        </div>
    );
};

export default Home;