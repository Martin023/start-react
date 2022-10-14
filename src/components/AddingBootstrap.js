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
    let classes = 'badge m-2';
    classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';

    return (
      <div>AddingBootstrap
        {/* <img src={this.state.imgUrl} alt=''></img> */}
        <span className='badge '></span>
        <button className='btn btn-success m-2'>Success</button>
      </div>
    )
  }
}
export default AddingBootstrap