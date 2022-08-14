import React, { Component } from "react";

// using states in class components:
// 1. state - keyword for creating state objects in react. Usually done in contructor method inside a class.
// 2. super() method is required because we extend racts component class and a call has to be made to the base class consructor.
// 3. this keyword is used when creating state, using setState method and calling changeState() method because they are used inside a class.
class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thankyou for subscribing'
        })
    }
    render(){
        return (
           <div>
             <h1> {this.state.message}</h1>
             <button onClick={() => this.changeMessage() }>Subscribe</button>
           </div>
        )
    }
}

export default Message