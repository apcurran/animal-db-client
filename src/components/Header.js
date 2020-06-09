import React from 'react';
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <Link to="/" className="logo">Animal DB</Link>
                {localStorage.authToken ? (
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/add">
                                Add
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Logout />
                        </li>
                    </ul>
                ) : (
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/user/register">
                                Register
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/user/login">
                                Log In
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}
