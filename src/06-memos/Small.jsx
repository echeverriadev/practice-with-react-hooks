import {memo} from 'react';

export const Small = memo(({value}) => {
  console.log("ME VOLVI A GENERAR, CON EL MEMO SOLO SE MUESTRA CUANDO VALUE CAMBIA")
  return (
    <small>{value}</small>
  )
})
