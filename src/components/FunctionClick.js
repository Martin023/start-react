import React from 'react'

function FunctionClick() {

    //event handler function
    function clickHandler(){
        console.log('click me')
    }
    // const clickHandler = () => {
    //     console.log("Button Click!")
    // }
  return (
    <div>
        <button onClick={clickHandler}>ClickMe</button>
    </div>
  )
}

export default FunctionClick