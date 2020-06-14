import React from 'react';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div id={'not-pound'}>
            <img className={'ml-auto mr-auto'} src={'./images/general/page_not_found.png'} alt={'404 page not found'}></img>
            <div className={' ml-auto mr-auto mb-2'}>
                <h2>Where Do You Want To Continue?</h2>
                <div  className={'d-flex justify-content-around'}>
                    <Link to={'/'} className={'buttonStyle'}>
                        Home Page
                    </Link>
                    <Link className={'buttonStyle'}
                        to={{
                            pathname: "/gallery",
                            state: {
                                saleStatus: '',
                                selectedCityId: ''
                            }
                        }}>
                        Gallery
                </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PageNotFound;