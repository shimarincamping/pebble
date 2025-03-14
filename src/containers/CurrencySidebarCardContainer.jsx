import React, { useState, useEffect } from "react";
import { useAuth } from "../containers/AuthProvider";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import CurrencySidebarCard from "../components/CurrencySidebarCard";

const CurrencySidebarCardContainer = () => {
    const { user } = useAuth();  // Get logged-in user
    const [currencyData, setCurrencyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("jwtToken"); // Retrieve JWT token

    useEffect(() => {
        if (!user) return; // Ensure user is available

        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/users/${user}/currency`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // Send auth token
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch currency data");
                }

                const data = await response.json();
                setCurrencyData(data); // Update state with API response
            } catch (error) {
                console.error("Error fetching currency data:", error);
            } finally {
                setLoading(false); // Stop loading spinner
            }
        };

        fetchCurrencyData();
    }, [user]);

    if (loading) {
        return <ComponentLoadingSpinner />;
    }

    return <CurrencySidebarCard data={currencyData} />;
};

export default CurrencySidebarCardContainer;
