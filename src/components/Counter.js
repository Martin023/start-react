import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    // increment(){
    //     // this.state.count = this.state.count + 1 -using this method willot render to the UI rather than to the console and thts why we use setstate method.
    //     this.setState({
    //         count:this.state.count + 1
    //     }) 
    //     console.log(this.state.count)
    // }

    increment() {
        this.setState((prevState) => (
            {
                count: prevState.count    //making use of function parameter approach. Used when the new state is dependent on the previous state.
            }
        ))
    }

    

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter