// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{

    passOn = (e) => {
        e.persist()
        this.props.onDelayedClick(e)
    }

    render() {
        return (
            <button onClick={this.passOn}></button>
        )
    }
}