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
    }, [API_URL]);

    return (
        <main className="main">
            <h1 className="main__title">Animals</h1>
            <div className="animal-card-group">
                {animals.map(animal => (
                    <article className="animal-card" key={animal._id}>
                        <Link to={`/animal/${animal._id}`}>
                            <h3 className="animal-card__title">{animal.animal_common_name}</h3>
                        </Link>
                        <figure className="animal-card__fig">
                            <img src={animal.main_img_url} alt={animal.animal_common_name} className="animal-card__fig__img"/>
                        </figure>
                    </article>
                ))}
            </div>
        </main>
    )
}
