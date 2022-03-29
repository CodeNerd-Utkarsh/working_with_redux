import React from 'react'
// * Use Redux State and Actions in React Components​
// * Now we can use the React Redux hooks to let React components interact with the Redux store.We can read data from the store with useSelector, and dispatch actions using useDispatch.

import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./store/counterSlice"

// selector will point to the value(state) which we need to update
//  dispatch will trigger the action which is defined in reducer methods
function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div >
                <button onClick={(e) => dispatch(increment())} >
                    Increment
                </button>
                <br />
                <span>{count}</span>
                <br />
                <button onClick={(e) => dispatch(decrement())} >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default App