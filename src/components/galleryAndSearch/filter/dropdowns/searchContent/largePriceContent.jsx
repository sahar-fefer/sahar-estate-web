import React from 'react';
import MaxMinPriceContent from "./maxMinPriceContent";

const LargePriceContent = ({ handleInputChange, minPrice, maxPrice }) => {
    return (
        <div className="wrapper row">
                <MaxMinPriceContent type={"Min"}
                    name={"minPrice"}
                    minPrice={minPrice}
                    handleInputChange={handleInputChange} />
                <MaxMinPriceContent type={"Max"}
                    name={"maxPrice"}
                    maxPrice={maxPrice}
                    handleInputChange={handleInputChange} />
            </div>
    );
};

export default LargePriceContent;