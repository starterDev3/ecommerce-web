import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


export default function Navbar() {
    const { user, logout } = useAuth();
    
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
            <span className="nav-greeting">Welcome, {user.email}!</span>
            <button onClick={() => window.confirm("Are you sure you want to log out?") && logout()} className="btn btn-secondary">
                Logout
            </button>
        </div>
    )}



           </div>
           </div>

        </nav>
    )
}