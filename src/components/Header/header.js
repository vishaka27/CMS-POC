import React from "react";

function Header(props) {
    return (
        <div className="header">
            <img src={props.logo} />
            <h1>{props.header}</h1>
        </div>
    )
}
export default Header;