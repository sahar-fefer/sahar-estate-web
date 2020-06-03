import React from "react";

class BedsOrBath extends React.Component {
    constructor() {
        super();
        this.state = {
            numberToSearch: "any"
        }
    }

    render() {
        return (
            <div className={"wrapper"}>
                <div className="wrapper row">
                    <div className={"chosenCircle"} value={100}>
                        <div className={"option"}>Any</div>
                    </div>
                    <div className={"chosenCircle"} value={1}>
                        <div className={"option"}>1+</div>
                    </div>
                    <div className={"chosenCircle"} value={2}>
                        <div className={"option"}>2+</div>
                    </div>
                    <div className={"chosenCircle"} value={3}>
                        <div className={"option"}>3+</div>
                    </div><div className={"chosenCircle"} value={4}>
                    <div className={"option"}>4+</div>
                </div>
                    <div className={"chosenCircle"} value={5}>
                        <div className={"option"}>5+</div>
                    </div>

                </div>
                <div style={{fontSize: ".8rem", padding: "10px"}} className="wrapper row justify-content-center">
                    Or Select {this.props.title} Range
                </div>
                <div className="wrapper row">
                    <select className={"buttonInputStyle col-5"} type={"select"} value={"1"}>
                        <option>From</option>
                        <option>Studio</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <span>-</span>
                    <select className={"buttonInputStyle col-5"} type={"select"} value={"To"}>
                        <option>To</option>
                        <option>Studio</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default BedsOrBath;