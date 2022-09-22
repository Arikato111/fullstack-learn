import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Member from "./pages/Member";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/register" element={<Register />} />   
                <Route path="/login" element={<Login />} />
                <Route path="/member" element={<Member><div>hello world</div></Member>} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<main><div className="text-lg text-center">Not Found page</div></main>} />
            </Routes>
        </Router>
    );
}
