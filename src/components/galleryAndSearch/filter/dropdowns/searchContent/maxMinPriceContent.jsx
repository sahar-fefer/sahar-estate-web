import React from "react";

class MaxMinPriceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
    }

    render() {
        const { handleInputChange, minPrice, maxPrice, type } = this.props;
        return (
            <div className="col-6 inputPrice">
                <div className="buttonInputStyle d-flex align-items-center">  {/*onClick={this.props.toggleDropDown}*/}
                    <input className={"inputInsidePrice"} name={type === 'Min' ? 'minPrice' : 'maxPrice'} value={type === 'Min' ? minPrice : maxPrice} placeholder={maxPrice || minPrice ? maxPrice || minPrice : `$ No ${type}`} onChange={handleInputChange} />
                </div>
            </div>
        )
    }
}

export default MaxMinPriceContent;