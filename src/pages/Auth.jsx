import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signup,user,login } = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setError(null);
    let result;
    if(mode === "login"){
       result = login(data.email,data.password);
    }
    else{
       result = signup(data.email,data.password);
    }
    console.log(result);
    if(result.sucess){
        navigate("/");
      alert("success")
    }
    else{
      setError(result.error);
      return;
    }
  }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>Welcome, {user.email}!</p>}
          <h1 className="page-title">{mode === "signup" ? "Signup" : "Login"}</h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
              {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email" {...register("email", { required: "Email is Require" })} />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" id="password" className="form-input" placeholder="Enter your password" {...register("password", {
                required: "password is requied",
                minLength: {
                  value: 6, message: "Password must at least 6 characters"
                }
              })} />

              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Signup" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (<><p>Already have an account?</p>
              <span className="auth-link" onClick={() => { setMode("login") }}>
                Login
              </span></>) : (<><p>Don't have an account?</p><span onClick={() => setMode("signup")} className="auth-link" >
                Signup
              </span></>)}
          </div>
        </div>
      </div>
    </div>
  );
}