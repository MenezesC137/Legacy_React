import  ReactDOM  from "react-dom";
import React from "react";
import Member from "./components/Member";
import Family from "./components/Family";

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Family lastName='Silva Pereira'>
            <Member name ='Ana' />
        </Family>
    </div>
, elemento)