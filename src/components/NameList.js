import React from 'react'

function NameList() {

//     const names = ['John', 'Paul', 'George', 'Ringo']
//     // using the map method to return a new array of elements
//     const nameList = names.map((name) => <h2 >{name}</h2>)
//   return (
//     <div>
//         {
//            nameList
//         }
//     </div>
//   )


const persons = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Paul', age: 35 },
    { id: 3, name: 'George', age: 40 },
    { id: 4, name: 'Ringo', age: 45 }

]

const personList = persons.map((person) => <h2>  {person.name} is {person.age} years old and id {person.id}</h2>)

return (<div>{personList}</div>)
}

export default NameList