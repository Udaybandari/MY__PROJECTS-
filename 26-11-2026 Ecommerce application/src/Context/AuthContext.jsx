
import { createContext, useContext, useState } from "react";

// Create Context
const AuthContext = createContext();

// Create Provider
export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Login Function
  const login = (email, password) => {

    // Temporary demo authentication
    const loggedInUser = {
      id: 1,
      name: "Uday",
      email: email,
      role: email === "admin@gmail.com" ? "admin" : "user"
    };

    setUser(loggedInUser);

    localStorage.setItem(
      "user",
      JSON.stringify(loggedInUser)
    );
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
export function useAuth() {
  return useContext(AuthContext);
}
