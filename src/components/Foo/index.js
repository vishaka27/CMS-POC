import React from "react";

function Foo(props) {
    return (
        <div className="foo">
            <h2>{props.block.headline}</h2>
                Hi I'm a {props.block.headline} component.
            <hr />
        </div>
    )
}

export default Foo;