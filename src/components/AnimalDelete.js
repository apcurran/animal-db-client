import React, { useState, useCallback } from 'react';

export default function AnimalDelete({ animalId }) {
    const [error, setError] = useState("");

    async function handleDelete() {
        const API_URL = `http://localhost:5000/api/animals/animal/${animalId}`;
        const options = {
            method: "DELETE"
        };

        const response = await fetch(API_URL, options);
        const data = await response.json();
    
        if (data.hasOwnProperty("error")) {
            setError(data.error);

            return;
        }
    }

    return (
        <div className="">
            {error ? (
                <h3>{error}</h3>
            ) : null}
            <button className="animal-delete">Delete Animal</button>
        </div>
    )
}
