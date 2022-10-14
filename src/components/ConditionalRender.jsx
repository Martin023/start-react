import React, { Component } from 'react'

class ConditionalRender extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 1
      }
    }
  render() {
    let classes = 'badge m-2 badge- bg-warning ';
    classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';

    return (
        <div>
            <h1>hheheh</h1>
            <span className={classes}>{this.state.count}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
    );
    }
}
export default ConditionalRender;

