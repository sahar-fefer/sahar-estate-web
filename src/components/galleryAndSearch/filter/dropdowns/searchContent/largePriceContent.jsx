import React from 'react';
import MaxMinPriceContent from "./maxMinPriceContent";

const LargePriceContent = ({ handleInputChange, min_price, max_price }) => {
    return (
        <div className="wrapper row">
                <MaxMinPriceContent type={"Min"}
                    name={"min_price"}
                    min_price={min_price}
                    handleInputChange={handleInputChange} />
                <MaxMinPriceContent type={"Max"}
                    name={"max_price"}
                    max_price={max_price}
                    handleInputChange={handleInputChange} />
            </div>
    );
};

export default LargePriceContent;