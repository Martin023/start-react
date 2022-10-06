import React from 'react'

function FragmentDemo() {
  return (
    // <div>
    //     <h1>Fragment Demo</h1>
    //     <p>This describes the Fragment Demo component</p>
    // </div>

    // we can use the react fragment to avoid the extra div tag/ extra node in the DOM
    // <> is the same as <React.Fragment>

    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This describes the Fragment Demo component</p>
    </React.Fragment>

    // OR


  )
}

export default FragmentDemo