import React from "react";

import "./foo1.scss";

function Foo1(props) {
    return (
        <div className="foo1">
            <img src={props.block.headline} />
        </div>
    )
}
export default Foo1;