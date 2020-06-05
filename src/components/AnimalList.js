import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function AnimalList() {
    const [animals, setAnimals] = useState([]);
    const API_URL = "http://localhost:5000/api/animals";

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAnimals(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <main className="main">
            <h1>Main Animal List Page</h1>
            {animals.map(animal => (
                <article className="animal-card" key={animal._id}>
                    <Link to={`/animal/${animal._id}`}>
                        <h3 className="animal-card__title">{animal.animal_common_name}</h3>
                    </Link>
                </article>
            ))}
        </main>
    )
}
