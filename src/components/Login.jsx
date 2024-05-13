import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      username,
      password,
    });
  };
  return (
    <div>
      {/* <form
        action=""
        style={{ display: "flex", gap: "2rem" }}
        onSubmit={handleSubmit}
      > */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      {/* </form> */}
    </div>
  );
};

export default Login;
