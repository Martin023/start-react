import React, { Component } from 'react'

class ClassClick extends Component {

    //adding a class component click handler
    clickHandler(){
        console.log("clicked the me button")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click mee!!</button>
      </div>
    )
  }
}

export default ClassClick