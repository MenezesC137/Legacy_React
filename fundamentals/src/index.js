import  ReactDOM  from "react-dom";
import React from "react";
import PrimeiroComponent from "./components/PrimeiroComponent";

const elemento = document.getElementById('root')
ReactDOM.render(
    <PrimeiroComponent value='Bom dia' name='Carlos'/>
, elemento)