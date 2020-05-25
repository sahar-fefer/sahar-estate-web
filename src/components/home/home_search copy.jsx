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


{/* <div id="big-photo" className="cover-photo">
                <div className="inside-photo container text-center">
                    <h1 className=" header padding-between">{title ? title : this.state.title}<span className="sm">℠</span>
                    </h1>
                    <p className="paragraf padding-between d-none d-md-block">{description ? description : this.state.description}</p>
                    <ul className="list-in-photo padding-between d-flex justify-content-md-center md-justify-center">
                        <li className={sale_status === "sale" ? "list-chosed" : ""}><Link to="/buy">BUY</Link></li>
                        <li className={sale_status === "rent" ? "list-chosed" : ""}><Link to="/rent">RENT</Link></li>
                        <li className={sale_status === "both" ? "list-chosed" : ""}><Link to="/all">BOTH</Link></li>
                    </ul>
                    <div className="row d-flex justify-content-md-center">
                        <form className="padding-between col d-flex justify-content-md-center" action="search.html">
                            <div className="row form">
                                <select className="col input-1" onChange={selectCountry}>
                                    <option>Chose Countries</option>
                                    {
                                        countries.map(country => (
                                            <option value={country.id}>{country.name}</option>
                                        ))
                                    }
                                </select>
                                <Link to={{
                                    pathname: "/gallery",
                                    state: {
                                        selectedCountry,
                                        selectedCountryName,
                                        sale_status
                                    }
                                }}>
                                    <input className="col-auto input-2" type="submit" name="submit" value="Search" />
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}