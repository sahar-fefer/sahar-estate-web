import React from "react";
import OpenDropdown from "./openDropdown";

class Dropdown extends React.Component {
    render() {
        const {isOpen, btnName, title, content, toggleDropdown} = this.props;
        return (
            <div>
                <button className={"buttonStyle col-auto"} onClick={toggleDropdown}>
                    {btnName}
                    <i className={`iconDropButton chevron-down-icon fa fa-chevron-${isOpen ? 'up' : 'down'}`}/>
                </button>

                {isOpen && <OpenDropdown title={title} content={content}/>}
            </div>
        )
    }
}

export default Dropdown;