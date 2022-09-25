import { Link } from "react-router-dom";

const Header = ({ isLogin }) => {
    console.log(isLogin);
    const getLogout = ()=> {
        localStorage.removeItem("token");
        location.pathname = "/login"
    }
    return (
        <nav className="flex bg-white sticky top-0 p-2 shadow-lg mb-3">
            <div className="mx-1 text-lg"><Link to={"/"}>Home</Link></div>
            {isLogin? 
            <>
                <div className="mx-1 text-lg"><Link to={"/profile"}>Profile</Link></div>
                <div className="mx-1 text-lg"><span className="cursor-pointer" onClick={getLogout}>Logout</span></div>
            </>
            : 
            <>
                <div className="mx-1 text-lg"><Link to={"/login"}>Login</Link></div>
                <div className="mx-1 text-lg"><Link to={"/register"}>Register</Link></div>
            </>
            }
        </nav>
    );
};

export default Header;
