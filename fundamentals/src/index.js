import ReactDOM from "react-dom";
import React from "react";
import Contador from "./components/Contador";

const elemento = document.getElementById('root')
ReactDOM.render(
    <Contador numInicial={100} />
, elemento)