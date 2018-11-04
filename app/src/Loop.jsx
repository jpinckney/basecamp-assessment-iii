import React, { Component } from 'react';

class Loop extends Component {
    render() {
        var output = [];

        for (var i = 0; i < 10; i++) {
            output.push(this.render2());
        }

        return (
            <div>
                {output}
            </div>
        );
    }

    render2() {
        return (
            <p className="p2">I will get this eventually!!</p>
        )
    }
}

export default Loop;