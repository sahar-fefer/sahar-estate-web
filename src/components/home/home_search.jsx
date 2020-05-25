import React from 'react';
import { Link } from 'react-router-dom';

const HomeSearch = ({ title, description }) => {
    const sale_status = 'buy';
    return (
        <div id={"search"} className={'cover-photo'}>
            <div className={'container content-wrapper'}>
                <h1 className={'title'}>{title}</h1>
                <h3 className={'description d-sm-block'}>{description}</h3>
                <ul className={'row sale-options-wrapper'}>
                    <li className={`col-auto sale-options ${sale_status === "sale" && "list-chosed"}`}>
                        <Link to='/buy' className={'bottom-line'}>Buy</Link>
                    </li>
                    <li className={`col-auto  sale-options ${sale_status === "rent" && "list-chosed"}`}>
                        <Link to='/rent' className={'bottom-line'}>Rent</Link>
                    </li>
                    <li className={`col-auto  sale-options ${sale_status === "sell" && "list-chosed"}`}>
                        <Link to='/sell' className={'bottom-line'}>Sell</Link>
                    </li>
                </ul>
                <div className="row">
                    <form className="col" action="search.html">
                        <div className="row search-form">
                            <select className="col select">
                                <option>Chose Countries</option>
                                {/* {
                                    countries.map(country => (
                                        <option value={country.id}>{country.name}</option>
                                    ))
                                } */}
                            </select>
                            <input className="col-auto submit" type="submit" name="submit" value="Search">
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