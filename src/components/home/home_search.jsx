import React from 'react';
import { Link } from 'react-router-dom';

const HomeSearch = ({ title, description }) => {
    return (
        <div id="search">
            <div className={'container'}>
                <h1 className={'title'}>{title}</h1>
                <h3 className={'description'}>{description}</h3>
                <ul className={'row'}>
                    <li className={'col-auto'}>
                        <Link to='/buy'>Buy</Link>
                    </li>
                    <li className={'col-auto'}>
                        <Link to='/rent'>Rent</Link>
                    </li>
                    <li className={'col-auto'}>
                        <Link to='/sell'>Sell</Link>
                    </li>
                </ul>
                <div className="row">
                    <form className="col" action="search.html">
                        <div className="row">
                            <select className="col">
                                <option>Chose Countries</option>
                                {/* {
                                    countries.map(country => (
                                        <option value={country.id}>{country.name}</option>
                                    ))
                                } */}
                            </select>
                            <input className="col-auto" type="submit" name="submit" value="Search">
                                {/* <Link to={{
                                    pathname: "/gallery",
                                    state: {
                                        selectedCountry,
                                        selectedCountryName,
                                        sale_status
                                    }
                                }} /> */}
                            </input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;
