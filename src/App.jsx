import React from 'react'

import Greet from './Greet'

import State from './State';
function App() {
  return (
    <div>
      <h1>Welcome to React</h1>

      <State />
    </div>

   
  )
}

export default App


/**
 * The virtual dom is a light weight in memory representation of the real document object model dom provided by libraries like react.
 * Instead of directly interacting with the browsers dom (which is relatably slow ) react creates  a virtual copy of it in js memory 
 */
