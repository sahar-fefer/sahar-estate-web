import React from "react";

class OpenDropdown extends React.Component {
    render() {
        return (
            <div className={"openDropdown"}>
                <div className={"titleOpenDropdown"}>{this.props.title}</div>
                <div className={"contentOpenDropdown"}>{this.props.content}</div>
            </div>
        )
    }
}

export default OpenDropdown;