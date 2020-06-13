import React from 'react';

const OpenDropdown = ({type, title, content}) => {
    return (
        <div className={type ? 'openDropdown allFiltersDropdown' : "openDropdown"}>
                <div className={"titleOpenDropdown"}>{title}</div>
                <div className={"contentOpenDropdown"}>{content}</div>
            </div>
    );
};

export default OpenDropdown;