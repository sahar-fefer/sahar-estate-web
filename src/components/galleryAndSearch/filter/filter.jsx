import React from "react";
import Dropdown from "./dropdowns/dropdown";
import LargePriceContent from "./dropdowns/searchContent/largePriceContent";
import BedsOrBath from "./dropdowns/searchContent/bedsOrBath";

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            activeDropdown: -1,
            price: {
                btnName: "Price",
                title: "Price Range",
                content: <LargePriceContent/>
            },
            beds: {
                btnName: "Beds",
                title: "Bedrooms",
                content: <BedsOrBath title={"Bedrooms"}/>
            },
            rooms: {
                btnName: "Rooms",
                title: "Rooms",
                content: <BedsOrBath title={"Rooms"}/>
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
        const {handleSubmit, handleInputChange} = this.props;
        const {activeDropdown, price, beds, rooms, resetFilters} = this.state;
        return (
            <div id={"searchNav"}>
                <form className="search-option form-inline">
                    <input className="col-auto inputSearchStyle" type="search" name="city" placeholder="Search"
                           onChange={handleInputChange}/>
                    <button className="submitBtn buttonStyle search-button" onClick={handleSubmit}><i
                        className="fa fa-search"/></button>
                    <Dropdown isOpen={activeDropdown === 1} toggleDropdown={(e) => this.toggleDropdownItems(e, 1)}
                              btnName={price.btnName} title={price.title}
                              content={price.content}/>
                    <Dropdown isOpen={activeDropdown === 2} toggleDropdown={(e) => this.toggleDropdownItems(e, 2)}
                              btnName={beds.btnName} title={beds.title}
                              content={beds.content}/>
                    <Dropdown isOpen={activeDropdown === 3} toggleDropdown={(e) => this.toggleDropdownItems(e, 3)}
                              btnName={rooms.btnName} title={rooms.title}
                              content={rooms.content}/>
                    <button className="buttonStyle col-auto" onClick={resetFilters}>Reset</button>
                </form>
                <div className={"pill-button"}>
                    <button className={"button-list pill-buttons"}>List</button>
                    <button className={"button-map pill-buttons"}>Map</button>
                </div>
            </div>
        )

    }
};

export default Filter;