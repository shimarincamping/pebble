import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("jwtToken");
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
                        setUser(data.user.uid);
                    } else {
                        localStorage.removeItem("token");
                        setUser(null);
                    }
                } catch (error) {
                    console.error("Auth verification failed:", error);
                    localStorage.removeItem("token");
                    setUser(null);
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
            console.log(data.uid);
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
