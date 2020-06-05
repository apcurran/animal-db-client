import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <Link to="/" className="logo">Animal DB</Link>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
