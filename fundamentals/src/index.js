import  ReactDOM  from "react-dom";
import React from "react";
import { CompA, CompB } from "./components/DoisComponents";

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <CompA valor='Bom dia!' />
        <CompB valor='Mas já e de tarde!' />
    </div>
, elemento)