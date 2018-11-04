import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({count: this.state.count+=5})}>Click me you fool!</button>
                <p className="p3">{this.state.count}</p>
            </div>
        );
    }

    constructor() {
        super()
        this.state = {
            count: 1
        }
    }
}

export default Counter;