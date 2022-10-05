import React, { Component } from 'react'

class UpdatinglifecycleMethods extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:'lazy',
    }
  }
  //Method 1 - getDerivedStateFromProps

  static getDerivedStateFromProps(props,state) {
    console.log('the get derived from state static method')
}
  //Method 2 - shouldComponentUpdate
  // this method is used to determine if the component should be updated or not by returning a boolean value true or false
  shouldComponentUpdate() {
    console.log('should component update method')
    return true
  }

  //Method 3 - getSnapshotBeforeUpdate
  // this method is used to capture some information from the DOM before it is changed
  getSnapshotBeforeUpdate(prevProps,prevState) {
    console.log('get snapshot before update method')
    return null

  }

  //Method 4 - componentDidUpdate
  // this method is used to perform some action after the component has been updated
  componentDidUpdate() {
    console.log('component did update method')
  }

  changeState = ()=>{
    this.setState({
      name:'code'
    })
  }

  render() {
    return (
      <div>
          <div>UpdatinglifecycleMethods</div>
          <h2>hello, {this.state.name}</h2>
          <button onClick={this.changeState}>Changing the state</button>
      </div>
    )
  }
}

export default UpdatinglifecycleMethods