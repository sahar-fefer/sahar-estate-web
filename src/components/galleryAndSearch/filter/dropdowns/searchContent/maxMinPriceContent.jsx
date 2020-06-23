import React from "react";

class MaxMinPriceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
    }

    render() {
        const { handleInputChange, min_price, max_price, type } = this.props;
        return (
            <div className="col-6 inputPrice">
                <div className="buttonInputStyle d-flex align-items-center">  {/*onClick={this.props.toggleDropDown}*/}
                    <input className={"inputInsidePrice"} name={type === 'Min' ? 'min_price' : 'max_price'} value={type === 'Min' ? min_price : max_price} placeholder={max_price || min_price ? max_price || min_price : `$ No ${type}`} onChange={handleInputChange} />
                </div>
            </div>
        )
    }
}

export default MaxMinPriceContent;