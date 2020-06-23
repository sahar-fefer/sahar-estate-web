import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import Dropdown from "./dropdowns/dropdown";
import LargePriceContent from "./dropdowns/searchContent/largePriceContent";
// import bathsOrRooms from "./dropdowns/searchContent/bathsOrRooms";
import OpenDropdown from './dropdowns/openDropdown';
import BathsOrRooms from './dropdowns/searchContent/bathsOrRooms';

const Filter = ({ cities, handleSubmit, handleInputChange, city_id, min_price, max_price, min_baths, max_baths, min_rooms, max_rooms }) => {
    const [activeDropdown, setActiveDropdown] = useState(-1);
    const dropdownsData = {
        priceDrop: {
            btnName: "Price",
            title: "Price Range",
            respons: "d-none d-sm-block",
            content: <LargePriceContent handleInputChange={handleInputChange} min_price={min_price} max_price={max_price} />
        },
        bathsDrop: {
            btnName: "baths",
            title: "bathrooms",
            respons: "d-none d-sm-block",
            content: <BathsOrRooms handleInputChange={handleInputChange} min_baths={min_baths} max_baths={max_baths} type={'baths'} />
        },
        roomsDrop: {
            btnName: "Rooms",
            title: "Rooms",
            respons: "d-none d-sm-block",
            content: <BathsOrRooms handleInputChange={handleInputChange} min_rooms={min_rooms} max_rooms={max_rooms} type={'rooms'} />
        },
        allFilters: {
            btnName: "More Filters",
            title: "More Filters",
            respons: "d-sm-none",
            content: <div>
                <OpenDropdown
                    type={'allFilters'}
                    title={'Price Rnge'}
                    content={<LargePriceContent handleInputChange={handleInputChange} min_price={min_price} max_price={max_price} />} />
                <OpenDropdown
                    type={'allFilters'}
                    title={'bathrooms'}
                    content={<bathsOrRooms handleInputChange={handleInputChange} min_baths={min_baths} max_baths={max_baths} type={'baths'} />} />
                <OpenDropdown
                    type={'allFilters'}
                    title={'Rooms'}
                    content={<bathsOrRooms handleInputChange={handleInputChange} min_rooms={min_rooms} max_rooms={max_rooms} type={'Rooms'} />} />
            </div>
        }
    }

    const property_types = ['apartment', 'condo', 'land', 'house', 'ranch'];

    const { priceDrop, bathsDrop, roomsDrop, allFilters } = dropdownsData;

    const toggleDropdownItems = (e, index) => {
        e.preventDefault();
        setActiveDropdown(index === activeDropdown ? -1 : index);
    };

    return (
        <div id={"searchNav"}>
            <form className="search-option form-inline">
                <select className={"buttonStyle cities col-3"} name="city_id" onClick={handleInputChange}>

                    <option value={""} disabled hidden>Cities</option>
                    <option value={""} >All Cities</option>
                    {
                        cities.length &&
                        cities.map((city, key) => (
                            <option value={city.id} key={key} selected={parseInt(city_id) === parseInt(city.id)}>{city.name}</option>
                        ))
                    }
                </select>
                <select className={"buttonStyle cities col-3 d-none d-md-block"} name="property_type" onClick={handleInputChange}>
                    <option value={""} disabled selected hidden>Property Type</option>
                    <option value={""}>All Propertys Types</option>
                    {
                        property_types.map((property_type, key) => (
                            <option value={property_type} key={key}>{property_type}</option>
                        ))
                    }
                </select>
                <Dropdown
                    respons={priceDrop.respons}
                    isOpen={activeDropdown === 1}
                    toggleDropdown={(e) => toggleDropdownItems(e, 1)}
                    btnName={priceDrop.btnName}
                    title={priceDrop.title}
                    content={priceDrop.content} />
                <Dropdown
                    respons={bathsDrop.respons}
                    isOpen={activeDropdown === 2}
                    toggleDropdown={(e) => toggleDropdownItems(e, 2)}
                    btnName={bathsDrop.btnName}
                    title={bathsDrop.title}
                    content={bathsDrop.content} />
                <Dropdown
                    respons={roomsDrop.respons}
                    isOpen={activeDropdown === 3}
                    toggleDropdown={(e) => toggleDropdownItems(e, 3)}
                    btnName={roomsDrop.btnName}
                    title={roomsDrop.title}
                    content={roomsDrop.content} />
                <Dropdown
                    respons={allFilters.respons}
                    isOpen={activeDropdown === 4}
                    toggleDropdown={(e) => toggleDropdownItems(e, 4)}
                    btnName={allFilters.btnName}
                    title={allFilters.title}
                    content={allFilters.content} />
                <button className="submitBtn buttonStyle search-button" onClick={handleSubmit}>
                    <BsSearch />
                </button>
            </form>
        </div>
    );
};

export default Filter;