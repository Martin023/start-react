import React, { Component } from 'react'

class LifecycleMount extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'lazy code'
      }
      console.log('contructor mount method')
    }
//static keyword must be included or the method will be ignored
    static getDerivedStateFromProps(props,state) {
        console.log('the get derived from state static method')
    }

    componentDidMount(){
        console.log('lifecycle mount: component did mount mehod')
    }
  render() {
    console.log('lifecycle mount render method')
    return (
      <div>LifecycleMount</div>
    )
  }
}

export default LifecycleMount

// showing the order of execution for mount methods. fromthelogging statements
// 1. constructor
// 2. get getDerivedStateFromProps
// 3. render
// 4. componentDidMount