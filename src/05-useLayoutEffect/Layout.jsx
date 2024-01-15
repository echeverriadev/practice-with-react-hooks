import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"
import { useLayoutEffect, useRef, useState } from "react";

export const Layout = () => {
  const {counter, increment, decrement} = useCounter(1);
  const {data, loading, error} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const {author, quote} = !!data && data[0];
  
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({width, height})
  }, [quote])

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      { JSON.stringify(boxSize) }
      <hr />
      {
        loading ? (
          <div className="alert alert-info text-center">Loading...</div>
        ): (
          <blockquote className="block-quote text-end" style={{display: "flex"}}>
            <p ref={pRef} className="mb-3">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
      }

      <button className="btn btn-primary" onClick={() => decrement(1)} disabled={loading}>
        Previous quote
      </button>
      <button className="btn btn-primary" onClick={() => increment(1)} disabled={loading}>
        Next quote
      </button>
    </>
  )
}
