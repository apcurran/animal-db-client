import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function AnimalList() {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_URL = "https://apcurran-animaldb.herokuapp.com/api/animals";

    useEffect(() => {
        setLoading(true);

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setAnimals(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [API_URL]);

    return (
        <main className="main">
            <h1 className="main__title">Featured Animals</h1>
            <div className="animal-card-group">
                {loading && (
                    <h3 className="loading">Loading...</h3>
                )}
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
