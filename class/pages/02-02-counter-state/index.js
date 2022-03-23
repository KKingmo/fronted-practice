import { useState } from 'react'

export default function CounterStatePage(){
    const [count, setCount]=useState(0)

    function counter(){
        setCount(count + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </div>
    )
}