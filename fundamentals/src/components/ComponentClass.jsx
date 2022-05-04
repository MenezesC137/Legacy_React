import React, { Component } from "react";

export default class ComponentClasse extends Component {
    render() {
        return (
            <h1>{this.props.value || 'Padrão'}</h1>
        )
    }
}
