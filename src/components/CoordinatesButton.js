import { render } from 'enzyme'
// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    createArray = e => {
        let array = []
        array.push(e.clientX)
        array.push(e.clientY)
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
            <button onClick={this.createArray}></button>
        )
    }
}