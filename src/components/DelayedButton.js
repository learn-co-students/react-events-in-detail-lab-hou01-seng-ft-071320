import React, {Component} from 'react';

export default class DelayedButton extends Component{

    returnDelay = (event)=>{
        event.persist();
        return setTimeout(()=>{this.props.onDelayedClick(event)},this.props.delay) 
    }

    render(){
        return <button onClick={this.returnDelay}/>
    }
    
}