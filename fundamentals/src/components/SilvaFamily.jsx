import React from "react";
import Member from "./Member";

export default props =>
    <div>
        <Member name='Ana' lastName={props.lastName}/>
    </div>