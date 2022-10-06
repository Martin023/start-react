import React, { Component } from 'react'
import PureComp from './PureComponent'
import MemoComponent from './MemoComponent'

class RerenderComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'lazy'
      }
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name:'code'
            })
        }
        ,2000)

    }
  render() {
    return (
     <div>
        <div>RerenderComp</div>
      <MemoComponent name={this.state.name}/>
        <PureComp name={this.state.name}/>
     </div>
    )
  }
}

export default RerenderComp