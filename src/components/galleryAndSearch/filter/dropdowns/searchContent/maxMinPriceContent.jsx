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
        return (
            <div className="col-6 inputPrice">
                <div className="buttonInputStyle d-flex align-items-center">  {/*onClick={this.props.toggleDropDown}*/}
                    <span>$</span><input className={"inputInsidePrice"} placeholder={`No ${this.props.type}`}/>
                </div>
                {this.state.open && (
                    <ul className="bigPriceList text-left">
                        {this.props.listPrices.map((price, i) => {
                            return <li key={i}>{price}</li>
                        })}
                    </ul>
                )}
            </div>
        )
    }
}

export default MaxMinPriceContent;