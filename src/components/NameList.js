import React from 'react'
import Person from './Person'

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
// list items are recommended to have key properties ie key = {person.id} to avoid duplicate items and a console error in browser
// key property is a special attribute that you need to include when creating lists of elements

 
const personList = persons.map((person) => <Person key={person.id} person={person} ></Person>)
return (<div>{personList}</div>)

}

export default NameList