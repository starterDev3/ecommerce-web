import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";


export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    return (
        <nav className="navbar">
           <div className="navbar-container">
             <Link to="/" className="navbar-logo">HardyShop
             
             </Link>
             <div className="navbar-link">
<Link to="/" className="navbar-link">Home</Link>
<Link to="/checkout" className="navbar-link">Cart</Link>
             </div>
             <div className="navbar-auth">


    {!user ? (
                <div className="navbar-auth">
            <Link to="/auth" className="btn btn-secondary">
                Log In
            </Link>
            <Link to="/auth" className="btn btn-primary">
                Sign Up
            </Link>
        </div>

    ) : (
        <div className="navbar-auth">
            <p>Welcome, {user.email}!</p>
            <button onClick={logout} className="btn btn-secondary">
                Logout
            </button>
        </div>
    )}



           </div>
           </div>

        </nav>
    )
}