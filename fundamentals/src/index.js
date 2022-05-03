import  ReactDOM  from "react-dom";
import React from "react";
import SilvaFamily from "./components/SilvaFamily";

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <SilvaFamily lastName='Silva' />
    </div>
, elemento)