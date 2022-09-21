import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Member from "./pages/Member";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member><div>hello world</div></Member>} />
            </Routes>
        </Router>
    );
}
