import React from "react";

export default props => (
    <div>
        <h1>{props.value}</h1>
        <h2>{props.name}</h2>
        <p>{Math.random()}</p>
    </div>
)