import React from 'react';

import HomeSearch from './homeSearch';
import InfoLine from './infoLine';
import Footer from '../footer/footer';
import { apartments } from '../../app-data/apartment-data';

const Home = ({ title, description }) => {
    const rentStatus = apartments.filter(apartment => apartment.sale_status === 'rent')
    const saleStatus = apartments.filter(apartment => apartment.sale_status === 'sale')
    const info = [
        {
            number: saleStatus.length,
            description: 'Homes For Sale',
            type: 'sale'
        },
        {
            number: rentStatus.length,
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