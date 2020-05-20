import React from 'react';

// components
import HomeSearch from './home_search';
// import LineGallery from './';
// import InfoLine from './';
import Footer from '../footer/footer';

const Home = ({type, title, description}) => {
    return (
        <div id="home">
            <HomeSearch title={title} description={description} />
            {/* <LineGallery/>
            <InfoLine/> */}
            <Footer/>
        </div>
    );
};

export default Home;