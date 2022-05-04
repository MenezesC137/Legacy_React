import React, { Component } from "react";

export default class Contador extends Component {
    
    sum() {
        this.props.numero++
    }
    
    render() {
        return (
            <div>
                <div>Número: { this.props.num }</div>
                <button> - </button>
                <button onClick={this.sum}> + </button>
            </div>
        )
    }
}

