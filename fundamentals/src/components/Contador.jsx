import React, { Component } from "react";

export default class Contador extends Component {

    state = {
        num: this.props.numInicial
    }

    sum = () => {
        this.setState({
            num: this.state.num +1
        })
    }

    sub = () => {
        this.setState({
            num: this.state.num - 1
        })
    }

    alt = dif => {
        this.setState({
        num: this.state.num + dif
        })
    }
    
    render() {
        return (
            <div>
                <div>Número: { this.state.num }</div>
                <button onClick={() => this.alt(-1)}> - </button>
                <button onClick={() => this.alt(1)}> + </button>
            </div>
        )
    }
}

