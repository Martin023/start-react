import React, { Component } from 'react'



class AddingBootstrap extends Component {
    constructor(props) {
    super(props)

    this.state = {
        //  imgUrl: 'https://picsum.photos/200/300',
        count: 0,
    }
}
  render() {
    return (
      <div>AddingBootstrap
        {/* <img src={this.state.imgUrl} alt=''></img> */}
        <button className='btn btn-success m-2'>Success</button>
      </div>
    )
  }
}
export default AddingBootstrap