import { useEffect, useState } from 'react'

export const Message = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  useEffect(() => {
    const onMouseMove = ({x, y}) => {
      const coords = {x, y};
      console.log(coords);
      setCoords(coords);
    }
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      // debe llamarse la funcion por referencia, xq si se llama como arrow function, es otro espacio en memoria al cancelar
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])
  return (
    <div>
      <h2>MESSAGE</h2>
      <p>{JSON.stringify(coords)}</p>
    </div>
  )
}
