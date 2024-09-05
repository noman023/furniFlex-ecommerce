import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SignUp() {
  const { user, login } = useContext(AppContext);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email;
    const pass = e.target.pass;

    login({ email: email.value, pass: pass.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" id="" />
        <input type="text" name="pass" id="" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
