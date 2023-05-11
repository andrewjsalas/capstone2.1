import React from "react";
import { useState, useEffect } from "react";

function Home() {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);

    // Get movie information from API
    useEffect(() => {
        setLoading(true);
        async function getMovie() {
            try {
                const response = await fetch()
            } catch (error) {
                
            }
        }
    })

    return (

    )
}

export default Home;