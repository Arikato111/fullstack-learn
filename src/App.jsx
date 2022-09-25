import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Member from "./pages/Member";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import axios from "axios";
import { apiBaseUrl } from "./lib/config";

export default function App() {
    const [token , setToken] = useState(localStorage.getItem("token"));
    useEffect(()=> {
        if(token) {
            axios.get(apiBaseUrl + "/member", {headers: {token}}).then(res => {
                if(res.data.status === 0) {
                    localStorage.removeItem("token")
                    setToken("")
                }
            })
        }
    }, [])
    return (
        <Router>
            <Header isLogin={!!token} />
            <Routes>
                <Route path="/profile" element={<Profile />} />   
                <Route path="/register" element={<Register />} />   
                <Route path="/login" element={<Login />} />
                <Route path="/member" element={<Member><div>hello world</div></Member>} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<main><div className="text-lg text-center">Not Found page</div></main>} />
            </Routes>
        </Router>
    );
}
