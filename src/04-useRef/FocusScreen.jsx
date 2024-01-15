import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef('hello');
  const onClick = () => {
    console.log(inputRef.current)
    // document.querySelector('input').focus();
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus screen</h1>
      <hr />
      <input
        ref={ inputRef }
        type="text"
        placeholder='Ingrese su nombre'
        className='form-control' 
      />

      <button 
        className="btn btn-primary mt-3"
        onClick={ onClick }
      >
        Set focus
      </button>
    </>
  )
}
