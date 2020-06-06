import React from "react";
import OpenDropdown from "../openDropdown";

class MaxMinPriceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
    }

    render() {
        const { listPrices, handleInputChange, minPrice, maxPrice, type } = this.props;
        return (
            <div className="col-6 inputPrice">
                <div className="buttonInputStyle d-flex align-items-center">  {/*onClick={this.props.toggleDropDown}*/}
                    <input className={"inputInsidePrice"} placeholder={maxPrice || minPrice ? maxPrice || minPrice : `$ No ${type}`} />
                </div>
                {this.state.open && (
                    <ul className="bigPriceList text-left">
                        {listPrices.map((price, i) => { //name={minPrice ? minPrice : maxPrice} name={minPrice || maxPrice && minPrice || maxPrice}
                            return <li data-name={minPrice ? "minPrice" : "maxPrice"} value={price} key={i} onClick={handleInputChange} >${price}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}

export default MaxMinPriceContent;