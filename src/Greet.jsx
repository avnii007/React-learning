import React from 'react'

function Greet(props) {
    console.log(props)
  return (
    <div>
      <h1>Good Morning, Happy Birthday {props.name} </h1>
      <h1>Welcome to React, {props.name}!</h1>
    </div>
  )
}


export default Greet
/**
 * Components are the reusable javascript code, 
 * they are the building blocks of react application, 
 * they return a react element to be rendered to the page, 
 * components an be defined as claases or functions
 * In this case, greet is a functional component that takes props as an arguments and return jsx to be rendered
 * jsx stands for javascript XML.
 * It is a syntax extension for js that allows you to write html like code in your file 
 * jsx is used in. react to describe what the UI should look like.
 * It is not required to use jsx in react but it is recommended as it makes the code more readable and easier to understand 
 * Props are used to pass data fom parent component to child component. 
 * They are read only and are immutable.
 * They can be used as attributes in tags.
 * More than one prop can be passed at a time. 
 * To write number, boolean, object and array, they are written in curly braces.. 
 * eg: count={2}, isAvailable={True} 
 * String is written in double quotes...eg: name="Avni".
 * How does a component receive props?
 * React bundles all the attributes into one object called props. You usually destructure the fields you need right in the parameter list: function Card({ name }).
 * Why type your props?


 */