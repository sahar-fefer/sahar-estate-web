import React from "react";
import MaxMinPriceContent from "./maxMinPriceContent";

class LargePriceContent extends React.Component {
    constructor(props) {
        super(props);
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
        const { handleInputChange, minPrice, maxPrice } = this.props;
        const { minPriceOpen, maxPriceOpen } = this.state;
        return (
            <div className="wrapper row">
                <MaxMinPriceContent type={"Min"}
                    listPrices={["0", "200,000", "400,000", "600,000", "800,000", "1,000,000", "1,200,000", "1,400,000"]}
                    // listPrices={[{ name: "0", value: 0 },
                    // { name: "200,000", value: 200000 },
                    // { name: "400,000", value: 400000 },
                    // { name: "600,000", value: 600000 },
                    // { name: "800,000", value: 800000 },
                    // { name: "1,000,000", value: 1000000 },
                    // { name: "1,200,000", value: 1200000 },
                    // { name: "1,400,000", value: 1400000 }]}
                    open={minPriceOpen}
                    toggleDropDown={this.toggleDropDown}
                    name={"minPrice"}
                    minPrice={minPrice}
                    handleInputChange={handleInputChange} />
                <MaxMinPriceContent type={"Max"}
                    listPrices={["350,000", "700,000", "1,000,000", "1,400,000", "1,800,000", "2,000,000", "1,400,000", "Any Price"]}
                    // listPrices={[{ name: "350,000", value: 350000 },
                    // { name: "700,000", value: 700000 },
                    // { name: "1,000,000", value: 1000000 },
                    // { name: "1,400,000", value: 1400000 },
                    // { name: "1,800,000", value: 1800000 },
                    // { name: "2,000,000", value: 2000000 },
                    // { name: "1,400,000", value: 2400000 },
                    // { name: "Any Price", value: "" }]}
                    open={maxPriceOpen}
                    toggleDropDown={this.toggleDropDown}
                    name={"maxPrice"}
                    maxPrice={maxPrice}
                    handleInputChange={handleInputChange} />
            </div>
        )
    }
}

export default LargePriceContent;