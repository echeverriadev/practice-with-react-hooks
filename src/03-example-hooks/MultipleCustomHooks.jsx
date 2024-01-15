import { useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"

export const MultipleCustomHooks = () => {
  // const [urlParam, setUrlParam] = useState(1);
  const {counter, increment, decrement} = useCounter(1);
  const {data, loading, error} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const {author, quote} = !!data && data[0];
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {
        loading ? (
          <div className="alert alert-info text-center">Loading...</div>
        ): (
          <blockquote className="block-quote text-end">
            <p className="mb-3">{quote}</p>
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
