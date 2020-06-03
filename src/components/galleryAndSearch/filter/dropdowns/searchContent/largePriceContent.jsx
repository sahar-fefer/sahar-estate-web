import React from "react";
import MaxMinPriceContent from "./maxMinPriceContent";

class LargePriceContent extends React.Component {
    constructor() {
        super();
        this.state = {
            minPriceOpen: true,
            maxPriceOpen: true,
        }
    }

    toggleDropDown = (e) => {
        e.preventDefault();
        this.openOneList();
    };

    openOneList = () => {
        this.setState(state => ({
            minPriceOpen: !state.minPriceOpen
        }));
        this.setState(state => ({
            maxPriceOpen: !state.maxPriceOpen
        }));
    };

    render() {
        return (
            <div className="wrapper row">
                <MaxMinPriceContent type={"Min"}
                                    listPrices={["$0", "$200K", "$400K", "$600K", "$800K", "$1M", "$1.2M", "$1.4M"]}
                                    open={this.state.minPriceOpen}
                                    toggleDropDown={this.toggleDropDown}
                                    name={"minPrice"}/>
                <MaxMinPriceContent type={"Max"}
                                    listPrices={["$350K", "$700K", "$1M", "$1.4M", "$1.8M", "$2.2M", "$2.4M", "Any Price"]}
                                    open={this.state.maxPriceOpen}
                                    toggleDropDown={this.toggleDropDown}
                                    name={"minPrice"}/>
            </div>
        )
    }
}

export default LargePriceContent;