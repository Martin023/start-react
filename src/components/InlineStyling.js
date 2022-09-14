import React from 'react'

// Adding inline styles
// We make use of objects with the key as the style name camel cased and the value as a string.
// We then use the onj name as the style value on the tag.
const heading = {
  fontSize:'72px',
  color:'blue'
}
function InlineStyling() {

  return (
    <div>
      <h2 style={heading}>Helloo inline styles</h2>
    </div>
  )
}

export default InlineStyling