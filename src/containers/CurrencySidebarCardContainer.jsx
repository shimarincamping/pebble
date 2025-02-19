import React, { useState, useEffect } from "react";
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';
import CurrencySidebarCard from "../components/CurrencySidebarCard";

const CurrencySidebarCardContainer = () => {
    const [currencyData, setCurrencyData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCurrencyData({
                id: 1,
                currentPoints: 600,
                availableTickets: 6,
            });
            setLoading(false);
        }, 2000); // Simulates an API call delay
    }, []);

    if (loading) {
        return <ComponentLoadingSpinner />;
    }

    return <CurrencySidebarCard data={currencyData} />;
};

export default CurrencySidebarCardContainer;

