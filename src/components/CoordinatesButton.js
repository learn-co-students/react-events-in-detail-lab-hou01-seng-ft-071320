// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    onReceiveCoordinates = (event) => {
        
        this.props.onReceiveCoordinates([event.clientX, event.clientX])
    }
    render() {
        return <button onClick={this.onReceiveCoordinates}> </button>
    }
}