import { createContext, useState } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("currentUserEmail") ? { email: localStorage.getItem("currentUserEmail") } : null);
  function signup(email, password) {
    console.log("signup called with", email, password);
    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    if (users.find(u => u.email === email)) {

      return { sucess: false, error: "Email already exists" };
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);
    setUser({ email })
    return { sucess: true };
  }

  function logout () {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }
 
function login(email, password) {
    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    const existingUser = users.find(u => u.email === email && u.password === password);
    if (!existingUser) {
      return { sucess: false, error: "Invalid email or password" };
    }
    localStorage.setItem("currentUserEmail", email);
    setUser({ email })
    return { sucess: true };
  }

  return <AuthContext.Provider value={{ signup, user, logout, login }}>
    {children}
  </AuthContext.Provider>
}