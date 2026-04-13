import { useContext, useState } from "react";
import { set, useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Auth() {
const [mode, setMode] = useState("signup");
const [error, setError] = useState(null);

const navigate = useNavigate();

const { signup, user, logout, login } = useContext(AuthContext);
const { 
    register, 
    handleSubmit, 
    formState: { errors },
 } = useForm(); 

 function onSubmit(data){
    setError(null);
let result;
    if (mode === "signup") {
result = signup(data.email, data.password);
    } else {
result = login(data.email, data.password);
    }

    if (result.success) {
navigate("/");
    } else {
setError(result.error);
    }

    console.log(result);
 }

    return (
        <div className="page">
            <div className="auth-container">
{user && <p>Welcome, {user.email}!</p>}
<button onClick={logout} className="btn btn-small">Logout</button>
                <div className="auth">
                <h1 className="auth-title">
                    {mode === "signup" ? "Sign Up" : "Login"}
                    </h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>

                        {error && <p className="error">{error}</p>}
                        <label htmlFor="email">
                          
                        </label>
                        <input type="email" placeholder="Email" className="auth-input" id="email" {...register("email",
                             { required: "Email is required" })} 
                             />
                             {errors.email && (
                                <span>{errors.email.error}</span>
                             )}
                        <label htmlFor="password">
                        
                        </label>
                        <input type="password" placeholder="Password" className="auth-input" id="password"
                         {...register("password",
                          { required: "Password is required",
                            minLength: 
                            { value: 6,
                             message: "Password must be at least 6 characters" },
                             
                             maxLength:
                              { value: 20,
                               message: "Password must be less than 20 characters" },
                             
                           })} />
                                                        {errors.password && (
                                <span>{errors.password.error}</span>
                             )}
                        <button type="submit" className="btn btn-primary btn-large">
                            {mode === "signup" ? "Sign Up" : "Login"}
                        </button>
                    </form>
                    <div className="auth-switch">
                        {mode === "signup" ? (
                            <p>
                                Already have an account? <span className="auth-link" onClick={() => setMode("login")}>
                                    Login
                                </span>
                            </p>
                        ) : (
                            <p>
                                Don't have an account? <span className="auth-link" onClick={() => setMode("signup")}>
                                    Sign Up
                                </span>
                            </p>
                        )}
                    </div>
</div>
            </div>
        </div>
    )
}