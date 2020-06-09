import React from 'react';
import { Link } from "react-router-dom";

export default function AnimalEditLink({ animalId }) {
    return (
        <div>
            <Link to={`/edit/${animalId}`} className="animal-edit-link">
                Edit Animal
            </Link>
        </div>
    )
}
