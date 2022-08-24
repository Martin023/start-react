import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
//   render() {
//     // using if else statemnt for conditional rendering
//     if(this.state.isLoggedIn) {
//     return (
//       <div>
//         <p>Welcome back!</p>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <p>Please sign up.</p>
//       </div>
//     )
//   }
// }


// The element variable approact to conditional rendering -storing elements to be rendered in variables
// render() {
//   let message 
//   if (this.state.isLoggedIn ){
//     message = <div> Welcome back</div>

//   }else {
//     message = <div>Please sign up</div>
//   }
//   return (
//     <div>
//       {message}
//     </div>
//   )
// }

// Method 3 Using ternary operator for conditional rendering
// The benefit of this approach is that it can be used within jsx code
// render() {
//   return (
//     this.state.isLoggedIn ? 
//     // if the first operator is true the 2nd operator is rendered
//     <div>Welcome back!</div> : 
//     // if the first operator is false the 2nd operator is rendered
//     <div>Please sign up.</div>

//   )


// }

// Method four short circuit method -used when you want to render something or nothing based on the condition

render() {
  // the expression on the left hand first evaluates and if true it also evaluates the right hand side 
  // otherwise the right hand side won be executed
  return this.state.isLoggedIn && <div>Welcome back!</div>

}
}
export default UserGreeting;