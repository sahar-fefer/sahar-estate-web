import React from "react";
import Dropdown from "./dropdowns/dropdown";
import LargePriceContent from "./dropdowns/searchContent/largePriceContent";
import BedsOrRooms from "./dropdowns/searchContent/bedsOrRooms";

import { BsSearch } from 'react-icons/bs';
class Filter extends React.Component {
    constructor(props) {
        super(props);
        const { handleInputChange, minPrice, maxPrice, minBeds, maxBeds, minRooms, maxRooms } = this.props;
        this.state = {
            activeDropdown: -1,
            price: {
                btnName: "Price",
                title: "Price Range",
                content: <LargePriceContent handleInputChange={handleInputChange} minPrice={minPrice} maxPrice={maxPrice} />
            },
            beds: {
                btnName: "Beds",
                title: "Bedrooms",
                content: <BedsOrRooms title={"Bedrooms"} handleInputChange={handleInputChange} minBeds={minBeds} maxBeds={maxBeds} />
            },
            rooms: {
                btnName: "Rooms",
                title: "Rooms",
                content: <BedsOrRooms title={"Rooms"} handleInputChange={handleInputChange} minRooms={minRooms} maxRooms={maxRooms} />
            }
        }
    }

    toggleDropdownItems = (e, index) => {
        e.preventDefault();
        this.setState({
            activeDropdown: index === this.state.activeDropdown ? -1 : index
        })
    };

    render() {
        const { handleSubmit, selectCountry, selectCity, countries, cities, selectedCountryName,
            selectedCountry, selectedCity, minPrice, maxPrice, minBeds, maxBeds, minRooms, maxRooms } = this.props;
        const { activeDropdown, price, beds, rooms, resetFilters } = this.state;
        // console.log(minPrice, maxPrice, minBeds, maxBeds, minRooms, maxRooms);
        return (
            <div id={"searchNav"}>
                <form className="search-option form-inline">
                    <select className={"buttonStyle cities col-auto"} name="city_id" onChange={selectCity}>
                        <option value={""}>Cities</option>
                        {
                            cities.length &&
                            cities.map(city => (
                                <option value={city.id}>{city.name}</option>
                            ))
                        }
                    </select>
                    <Dropdown isOpen={activeDropdown === 1} toggleDropdown={(e) => this.toggleDropdownItems(e, 1)}
                        btnName={price.btnName} title={price.title} content={price.content} />
                    <Dropdown isOpen={activeDropdown === 2} toggleDropdown={(e) => this.toggleDropdownItems(e, 2)}
                        btnName={beds.btnName} title={beds.title} content={beds.content} />
                    <Dropdown isOpen={activeDropdown === 3} toggleDropdown={(e) => this.toggleDropdownItems(e, 3)}
                        btnName={rooms.btnName} title={rooms.title} content={rooms.content} />
                    <button className="submitBtn buttonStyle search-button" onClick={handleSubmit}>
                        <BsSearch />
                    </button>
                </form>
                {/* <div className={"pill-button"}>
                    <button className={"button-list pill-buttons"}>List</button>
                    <button className={"button-map pill-buttons"}>Map</button>
                </div> */}
            </div>
        )

    }
};

export default Filter;