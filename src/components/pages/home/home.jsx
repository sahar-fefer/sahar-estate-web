import React from 'react';

// components
// import HomepageSearch from './'
// import LineGallery from './'
// import InfoLine from './'
import Footer from '../../organisems/footer/footer';

const Home = ({type, title, description}) => {
    return (
        <div id="home">
            {/* <HomepageSearch title={title} description={description} />
            <LineGallery/>
            <InfoLine/> */}
            <Footer/>
        </div>
    );
};

export default Home;