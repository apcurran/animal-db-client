import React, { useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";

export default function AnimalDelete({ animalId }) {
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    let history = useHistory();

    async function handleDelete(event) {
        event.preventDefault();

        const API_URL = `http://localhost:5000/api/animals/animal/${animalId}`;
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
            }
        };

        const response = await fetch(API_URL, options);
        const data = await response.json();
    
        if (data.hasOwnProperty("error")) {
            setError(data.error);

            return;
        }

        const message = data.message;

        setSuccessMsg(message);

        history.push("/");
    }

    return (
        <div>
            {error ? (
                <h3>{error}</h3>
            ) : null}
            <h2>Hello, Admin!</h2>
            <form onSubmit={handleDelete} className="form">
                <button type="submit" className="animal-delete">Delete Animal</button>
            </form>
        </div>
    )
}