import React from 'react'
import InlineStyling from './InlineStyling'
import './mystyles.css'


function Stylesheet() {
    let className = 'primary'
    // To include inline InlineStyling, we need to use the style attribute and pass an 
    // object with the style properties written in camelCase.
    // We then add the style object to the JSX element.
    // styles = {
    //   fontSize: '72px'
    // }
  return (
    <div>
        {/* or directly put the attribute name  */}
        {/* This is for external stylesheet */}
        <h1 className={`${className} fontsx blueback`}>Stylesheet</h1>

        {/* This is for inline styling ie css in same file styling */}

        {/* <h1 style={styles}>Inline</h1> */}

        {/* for direct inline styling of the elements , use double braces without the style object*/}
        <h1 style={{fontSize:20 }}></h1>

        <h4 >clasnames use</h4>
    </div>
  )
}

export default Stylesheet