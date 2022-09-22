import { useState } from "react";
import { apiBaseUrl } from "../lib/config";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [checkPass, setCheckPass] = useState("black");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false)

  const summitForm = async (e) => {
    e.preventDefault();
    if (name && username && password && password === confirmPassword) {
      let res = await axios.post(apiBaseUrl + "/member", {
        name,
        username,
        password,
      });
      if (res.data.status === 1) {
        setRedirect(true)
      } else {
        setError(res.data.message);
      }
    } else {
      setError("please check your information");
    }
return <Navigate to={"/login"} />
  };
  return (
    <main>
        {redirect && <Navigate to={"/login"} />}
      <h1 className="text-center text-2xl m-3">Register</h1>
      <div className="text-red-500 text-center">{error}</div>
      <div className="text-center text-lg">
        <form onSubmit={summitForm}>
          <div>
            <label htmlFor="name">name</label>
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username">username</label>
            <input
              className="input"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm password">confirm password</label>
            <input
              className="input"
              style={{ color: checkPass }}
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                let state = password === e.target.value ? "black" : "red";
                setCheckPass(state);
              }}
            />
          </div>
          <div>
            <button className="m-1 p-1 bg-blue-600 hover:bg-blue-500 text-white rounded ">
              Register
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
