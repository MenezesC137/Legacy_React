import React from "react";
import { ChildWithProps } from "../utils/utils";

export default props =>
    <div>
        <h1>Família</h1>
    
        { ChildWithProps(props) }

    {/*
        { React.Children.map(
            props.children, 
            child => {
                return React.cloneElement(
                    child, 
                    { ...props }
                )
            }
        )}
        { React.cloneElement(
            props.children, 
            { lastName: props.lastName }
        )}
        { React.cloneElement(
            props.children, 
            { ...props }
        )}
    */}
    </div>