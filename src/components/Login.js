import React, { useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let history = useHistory();

    const handleSubmit = useCallback( async (event) => {
        event.preventDefault();

        const API_URL = "http://localhost:5000/api/user/login";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        };
    
        try {
            const response = await fetch(API_URL, options);
            const data = await response.json();
    
            if (data.hasOwnProperty("error")) {
                setError(data.error);
    
                return;
            }

            const token = data;

            localStorage.setItem("authToken", token);

            history.push("/"); // Send to animal list page with admin rights
    
        } catch (err) {
            console.error(err);
        }

    }, [email, password, history] );

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="form">
                {error ? (
                    <h3 className="form__error">{error}</h3>
                ) : null}
                <div className="form-group">
                    <label htmlFor="email" className="form-group__label">Email</label>
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        id="email"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-group__label">Password</label>
                    <input
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        id="password"
                        className="form-group__input"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}