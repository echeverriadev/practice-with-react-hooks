import {useState} from 'react'

export const useCounter = (initial = 10) => {
  const [counter, setCounter] = useState(initial);

  const increment = (value = 1) => {
    setCounter(counter + value);
  }

  const decrement = (value = 1) => {
    if(counter === 0) return;
    setCounter(counter - value);
  }

  const reset = () => {
    setCounter(initial);
  }
  return {
    counter,
    increment,
    decrement,
    reset
  }
}
