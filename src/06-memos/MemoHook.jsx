import { useState, useMemo } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Here we go...');
  }
  return `${iterations} iterations done!`;
}


export const MemoHook = () => {
  const {counter,increment} = useCounter(10);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>Counter <small>{counter}</small></h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}> +1 </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>show/hidden {JSON.stringify(show)}</button>
    </>
  )
}
