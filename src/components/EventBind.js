import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    //   initialising clickHandler in a constructor
        // this.clickHandler = this.clickHandler.bind(this)
       
    }
    // method 1-3 method of event binding by using normal function
    // clickHandler() {
    //     this.setState({
    //         message:'Goodbye'
    //     })
    // }


    // method 4 of event biding usina arrow function as class property
    clickHandler = () => {
        this.setState({
            message:'Goodbye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* First method of doing the event by adding bind.(this) keyword after the event handler */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click ME!</button> */}

        {/* method 2 of event binding by using arrow functions in the render method */}
        {/* <button onClick={() => this.clickHandler()}>Click ME!</button> */}

        {/* method 3 of event binding by binding the event handler in the constructor as opposedin the render method- official documentation style */}
        <button onClick={this.clickHandler}>Click ME!</button>

      </div>
    )
  }
}

export default EventBind;