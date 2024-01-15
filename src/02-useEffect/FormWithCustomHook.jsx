import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChanged, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;
  return (
    <>
      <h1>Formulario con custom hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChanged}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>Clean form</button>
    </>
  );
};
