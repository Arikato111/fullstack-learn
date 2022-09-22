import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex bg-white sticky top-0 p-2 shadow-lg mb-3">
            <div className="mx-1 text-lg"><Link to={"/"}>Home</Link></div>
            <div className="mx-1 text-lg"><Link to={"/register"}>Register</Link></div>
            <div className="mx-1 text-lg"><Link to={"/login"}>Login</Link></div>
            <div className="mx-1 text-lg"><Link to={"/logout"}>Logout</Link></div>
            <div className="mx-1 text-lg"><Link to={"/profile"}>Profile</Link></div>
        </nav>
    );
};

export default Header;
