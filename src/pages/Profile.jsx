import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { apiBaseUrl } from "../lib/config";
const Profile = () => {
    if (!localStorage.getItem("token")) {
        return <Navigate to={"/login"} />;
    }

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            axios.get(apiBaseUrl + "/member", {headers:{token}}).then((response) => {
                if (response.data.status === 0) {
                    setError("Can not find profile please check login");
                } else {
                    setUser(response.data.user);
                    console.log(response.data.user)
                }
            });
        } else {
            setError("error please check your login")
        }
    }, []);

    return (
        <main className="mx-2 lg:mx-80">
            <div className="text-red-600 text-lg">{error}</div>
            <h1 className="text-4xl">Profile</h1>
            <hr />
            <div>_id: {user._id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
        </main>
    );
};

export default Profile;
