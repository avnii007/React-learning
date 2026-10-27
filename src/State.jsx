import { useState } from 'react';

function State() {
    const [count, setCount] = useState(0);
    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count - 1)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default State


/**
 * State is data that:
* a component remembers between renders, and
* when changed, triggers a re-render so the screen stays in sync.
* It enables you to store and update values that can change over time, such as user input, counters, or any other dynamic data. 
 * The useState hook returns an array with two elements: the current state value and a function to update that value. 
 * When the state is updated, React re-renders the component to reflect the new state.
 * Why never assign to state directly?
count = count + 1 does not tell React anything, so it never re-renders (and count is const anyway). Always call the setter, 
e.g. setCount(count + 1).

 */
