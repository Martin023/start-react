import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>  {person.name} is {person.age} years old and id {person.id}</h2>
    </div>
  )
}

export default Person