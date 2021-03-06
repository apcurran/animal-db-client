import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function AnimalDelete({ animalId }) {
    const [error, setError] = useState("");

    let history = useHistory();

    async function handleDelete(event) {
        event.preventDefault();

        const API_URL = `https://apcurran-animaldb.herokuapp.com/api/animals/animal/${animalId}`;
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

        history.push("/");
    }

    return (
        <div className="delete-animal-container">
            {error ? (
                <h3 className="error">{error}</h3>
            ) : null}
            <h2 className="delete-animal__title">Hello, Admin!</h2>
            <form onSubmit={handleDelete}>
                <button type="submit" className="form__submit delete-animal__btn">Delete Animal</button>
            </form>
        </div>
    )
}
