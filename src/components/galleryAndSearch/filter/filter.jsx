import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import Dropdown from "./dropdowns/dropdown";
import LargePriceContent from "./dropdowns/searchContent/largePriceContent";
import BedsOrRooms from "./dropdowns/searchContent/bedsOrRooms";

const Filter = ({ cities, handleSubmit, handleInputChange, minPrice, maxPrice, minBath, maxBath, minRooms, maxRooms }) => {
    const [activeDropdown, setActiveDropdown] = useState(-1);
    const dropdownsData = {
        priceDrop: {
            btnName: "Price",
            title: "Price Range",
            content: <LargePriceContent handleInputChange={handleInputChange} minPrice={minPrice} maxPrice={maxPrice} />
        },
        bedsDrop: {
            btnName: "Bath",
            title: "Bathrooms",
            content: <BedsOrRooms handleInputChange={handleInputChange} minBath={minBath} maxBath={maxBath} type={'Bath'} />
        },
        roomsDrop: {
            btnName: "Rooms",
            title: "Rooms",
            content: <BedsOrRooms handleInputChange={handleInputChange} minRooms={minRooms} maxRooms={maxRooms} type={'Rooms'} />
        }
    }

    const property_types = ['apartment', 'condo', 'land', 'house', 'ranch'];

    const { priceDrop, bedsDrop, roomsDrop } = dropdownsData;

    const toggleDropdownItems = (e, index) => {
        e.preventDefault();
        setActiveDropdown(index === activeDropdown ? -1 : index);
    };

    return (
        <div id={"searchNav"}>
            <form className="search-option form-inline">
                <select className={"buttonStyle cities col-3"} name="city_id" onClick={handleInputChange}>
                    <option value={""} disabled selected hidden>Cities</option>
                    {
                        cities.length &&
                        cities.map(city => (
                            <option value={city.id}>{city.name}</option>
                        ))
                    }
                </select>
                <select className={"buttonStyle cities col-3 d-none d-md-block"} name="property_type" onClick={handleInputChange}>
                    <option value={""} disabled selected hidden>Property Type</option>
                    {
                        property_types.map(property_type => (
                            <option value={property_type}>{property_type}</option>
                        ))
                    }
                </select>
                <Dropdown isOpen={activeDropdown === 1} toggleDropdown={(e) => toggleDropdownItems(e, 1)}
                    btnName={priceDrop.btnName} title={priceDrop.title} content={priceDrop.content} />
                <Dropdown isOpen={activeDropdown === 2} toggleDropdown={(e) => toggleDropdownItems(e, 2)}
                    btnName={bedsDrop.btnName} title={bedsDrop.title} content={bedsDrop.content} />
                <Dropdown isOpen={activeDropdown === 3} toggleDropdown={(e) => toggleDropdownItems(e, 3)}
                    btnName={roomsDrop.btnName} title={roomsDrop.title} content={roomsDrop.content} />
                <button className="submitBtn buttonStyle search-button" onClick={handleSubmit}>
                    <BsSearch />
                </button>
            </form>
            {/* <div className={"pill-button"}>
                <button className={"button-list pill-buttons"}>List</button>
                <button className={"button-map pill-buttons"}>Map</button>
            </div> */}
        </div>
    );
};

export default Filter;