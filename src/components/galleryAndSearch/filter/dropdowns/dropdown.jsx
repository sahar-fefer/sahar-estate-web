import React from "react";
import OpenDropdown from "./openDropdown";

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

class Dropdown extends React.Component {
    render() {
        const { respons, isOpen, btnName, title, content, toggleDropdown } = this.props;
        return (
            <div className={respons}>
                <button className={"buttonStyle col-auto"} onClick={toggleDropdown}>
                    {btnName}
                    {isOpen ?
                        <BsChevronUp className='iconDropButton' /> :
                        <BsChevronDown className='iconDropButton' />
                    }
                </button>

                {isOpen && <OpenDropdown title={title} content={content} />}
            </div>
        )
    }
}

export default Dropdown;