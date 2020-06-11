import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cities } from '../../app-data/cities-data';

import { BsSearch } from 'react-icons/bs';

const HomeSearch = ({ title, description }) => {
    const [selectedCityId, setSelectedCityId] = useState('');
    const [saleStatus, setSaleStatus] = useState('');

    const handleSelectCity = (e) => {
        setSelectedCityId(e.target.value);
    }

    return (
        <div id={"search"} className={'cover-photo'}>
            <div className={'container content-wrapper'}>
                <h1 className={'title'}>{title}</h1>
                <h3 className={'description d-sm-block'}>{description}</h3>
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