import React from "react";
import OpenDropdown from "./openDropdown";

class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            iconButton: "down",
        }
    }

    toggleDropDown = (e) => {
        e.preventDefault();
        this.setState(state => ({
            // {isOpen ? isOpen: false && iconButton: "down" : isOpen: true && iconButton: "up"}
            isOpen: !state.isOpen
        }));
    };

    render() {
        return (
            <div>
                <button className={"buttonStyle col-auto"} onClick={this.toggleDropDown}>
                    {this.props.btnName}<i className={`iconDropButton chevron-down-icon fa fa-chevron-${this.state.iconButton}`}></i>
                </button>
                {this.state.isOpen && (
                    <OpenDropdown title = {this.props.title} content = {this.props.content}/>
                )}
            </div>
        )
    }
}

export default Dropdown;