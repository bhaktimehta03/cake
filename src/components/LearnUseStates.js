import React, { useState } from 'react'

//{const [state, setstate] = useState(initialState)}

function LearnUSeStates() {

    const intialState = 0;
    const [count, setCount] = useState(intialState);
    return (<div>
        {/*inside LearnUSeStates */}
        <button onClick={() => { setCount(count + 1) }}>count{count} </button>
        <button onClick={() => setCount(intialState)}>reset {count}</button>
        <button onClick={() => setCount(count + 1)}>increment {count}</button>
        <button onClick={() => setCount(count - 1)}>decrement {count}</button>
    </div>)
}

export default LearnUSeStates;