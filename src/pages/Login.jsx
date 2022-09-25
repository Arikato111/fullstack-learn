import axios from "axios";
import { apiBaseUrl } from "../lib/config";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSummitForm = async (e) => {
        e.preventDefault();
        if (username && password) {
            let response = await axios.post(apiBaseUrl + "/login", {
                username,
                password,
            });
            if (response.data.status === 1) {
                localStorage.setItem("token", response.data.token);
                location.pathname = "/";
            }
        } else {
            setError("please check your informationD");
        }
    };
    return (
        <main>
            <h1 className="text-2xl text-center m-3">Login</h1>
            <div className="text-red-500">{error}</div>
            <div className="text-lg text-center">
                <form onSubmit={onSummitForm}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input
                            className="input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="bg-blue-500 p-1 rounded text-white m-1">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;
