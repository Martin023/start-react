import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
        this.inputRef = React.createRef()
        //important or common to create refs in the constructor so that it can be referenced throughout the component

    }

    componentDidMount(){
        // callin focus method on the input element  - this is the way to access the dom element
        this.inputRef.current.focus()

        //What does the inputRef have?
        //
        console.log(this.inputRef)
    }

  render() {
    return (
      <div>
        {/* //we now have access/reference to the input element */}
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}

export default RefsDemo