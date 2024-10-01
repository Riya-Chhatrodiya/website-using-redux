import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/Slices/CounterSlice';

const Counter = () => {
  
    const count = useSelector( (state) => state.counter.value )
    const dispatch = useDispatch();

    return (
    <div>
        <h2>COUNTER</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <div>{count}</div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter