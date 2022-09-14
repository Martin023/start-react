import React from 'react'
import './mystyles.css'


function Stylesheet() {
    let className = 'primary'
  return (
    <div>
        {/* or directly put the attribute name */}
        <h1 className={`${className} fontsx blueback`}>Stylesheet</h1>

        <h4 >clasnames use</h4>
    </div>
  )
}

export default Stylesheet