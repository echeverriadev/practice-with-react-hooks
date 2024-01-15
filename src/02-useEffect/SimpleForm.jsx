import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "stridder",
    email: "carlos@echeverria.com",
  });
  const { username, email } = formState;


  const onInputChanged = ({ target }) => {
    const {name, value} = target
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {console.log("se activa solo una vez")}, []);
  useEffect(() => {console.log("se activa cuando cambia el formstate")}, [formState]);
  useEffect(() => {console.log("se activa solo al cambiar el mail")}, [email]);
  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="user name"
        name="username"
        value={username}
        onChange={onInputChanged}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@electronico.com"
        name="email"
        value={email}
        onChange={onInputChanged}
      />
      {
        (username === 'stridder2') && <Message />
      }
    </>
  );
};
