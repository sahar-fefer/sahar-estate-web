import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCitiesWithApartments } from '../../api/cities';

import { BsSearch } from 'react-icons/bs';

const HomeSearch = () => {
    const [selectedCityId, setSelectedCityId] = useState('');
    const [saleStatus, setSaleStatus] = useState('');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCities()
    }, [])

    const fetchCities = async () => {
        setCities(JSON.parse(localStorage.getItem('cities')) || await getCitiesWithApartments())
    }

    const handleSelectCity = (e) => {
        setSelectedCityId(e.target.value);
    }

    return (
        <div id={"search"} className={'cover-photo'}>
            <div className={'container content-wrapper'}>
                <h1 className={'title'}>
                    Discover your perfect home
                </h1>
                <h3 className={'description d-sm-block'}>
                    With the most complete source of homes for sale & rent real estate
                </h3>
                <ul className={'row sale-options-wrapper'}>
                    <li className={`col-auto sale-options`} onClick={() => setSaleStatus('sale')}>
                        <div className={`bottom-line ${saleStatus === "sale" && "bottom-line-chosed"}`}>Buy</div>
                    </li>
                    <li className={`col-auto  sale-options`} onClick={() => setSaleStatus('rent')}>
                        <div className={`bottom-line ${saleStatus === "rent" && "bottom-line-chosed"}`}>Rent</div>
                    </li>
                </ul>
                <div className="row">
                    <form className="col" action="search.html">
                        <div className="row search-form">

                            <select className={"col select"} name="city" onChange={handleSelectCity}>
                                <option name='placeholder' value={""}>Cities</option>
                                {
                                    cities.length &&
                                    cities.map((city, key) => (
                                        <option value={city.id} key={key}>{city.name}</option>
                                    ))
                                }
                            </select>

                            <Link className="col-auto submit d-flex align-items-center" to={{
                                pathname: '/gallery',
                                state: {
                                    selectedCityId,
                                    saleStatus
                                }
                            }}>
                                <BsSearch />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;