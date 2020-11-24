import React from "react";

function Foo1(props) {
    return (
        <div className="foo1">
            <h2>{props.block.headline}</h2>
                <img src={props.block.headline} />
            <hr />
        </div>
    )
}
export default Foo1;