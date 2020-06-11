import React from 'react';

// components
import HomeSearch from './homeSearch';
import InfoLine from './infoLine';
import Footer from '../footer/footer';

const Home = ({type, title, description}) => {
    const info = [{number: '1,290', description: 'Homes For Sale'}, {number: '843', description: 'Homes For Rent'}, {number: '945', description: 'Recently Sold'}, {number: '390', description: 'Recently Rented'}, {number: '594', description: 'New Estates'}]
    
    return (
        <div id="home">
            <HomeSearch title={title} description={description} />
            <InfoLine info={info}/>
            <Footer/>
        </div>
    );
};

export default Home;