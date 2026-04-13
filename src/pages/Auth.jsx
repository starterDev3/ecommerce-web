import { useState } from "react";
import { useForm } from "react-hook-form";


export default function Auth() {
    const [mode, setMode] = useState("signup");
const { 
    register, 
    handleSubmit, 
    formState: { errors },
 } = useForm(); 

 function onSubmit(){
alert("Submitted successfully!");
 }

    return (
        <div className="page">
            <div className="auth-container">
<div className="auth">
                <h1 className="auth-title">
                    {mode === "signup" ? "Sign Up" : "Login"}
                    </h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">
                          
                        </label>
                        <input type="email" placeholder="Email" className="auth-input" id="email" {...register("email", { required: "Email is required" })} />
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