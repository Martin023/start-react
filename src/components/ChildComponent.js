import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('parameter from child')}>Greet Parent</button>
    </div> 
  )
}

export default ChildComponent