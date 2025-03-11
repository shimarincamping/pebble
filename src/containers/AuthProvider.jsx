import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("jwtToken");
            if (
                location.pathname !== "/login" &&
                location.pathname !== "/register" &&
                location.pathname !== "/splash"
            ) {
                if (token) {
                    try {
                        const response = await fetch(
                            `${process.env.REACT_APP_API_URL}/auth/verify`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );

                        if (response.ok) {
                            const data = await response.json();
                            if (!data.user.uid) {
                                throw new Error(`Could not authenticate user`);
                            }
                            setUser(data.user.uid);
                        } else {
                            navigate("/login");
                            throw new Error(
                                `${response.status} ${response.body}`
                            );
                        }
                    } catch (error) {
                        console.error("Auth verification failed:", error);
                        localStorage.removeItem("token");
                        setUser(null);
                    }
                } else {
                    console.log("No token found during authentication");
                    navigate("/login");
                }
            }
            setLoading(false);
        };

        checkAuth();
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    const login = async (email, password) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/auth/login`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Login failed"); // 🔴 Display error from backend
            }

            localStorage.setItem("jwtToken", data.jwtToken);

            console.log("Auth provider.jsx login: " + data.uid);
            setUser(data.uid);
        } catch (error) {
            console.error("Login error:", error.message);
            alert("Invalid email or password. Please try again."); // 🔴 Notify user of invalid credentials
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setUser(null);
    };

    // New Registration Function
    const register = async (fullName, email, password, confirmPassword) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/auth/register`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        fullName,
                        email,
                        password,
                        confirmPassword,
                    }),
                }
            );

            const data = await response.json();
            if (response.ok) {
                return data; // Handle success in the UI
            } else {
                throw new Error(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error.message);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
