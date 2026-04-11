import { Link } from "react-router-dom";

export default function Navbar() {
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
<div className="navbar-auth">
<Link to="/auth" className="btn btn-secondary">Log In</Link>
<Link to="/auth" className="btn btn-primary">Sign Up</Link>
</div>
           </div>
           </div>

        </nav>
    )
}