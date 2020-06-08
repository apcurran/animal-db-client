import React, { useState, useEffect } from 'react';
import AnimalDelete from "./AnimalDelete";

export default function AnimalInfo({ match }) {
    const [animalInfo, setAnimalInfo] = useState({});
    const API_URL = `http://localhost:5000/api/animals/animal/${match.params.id}`;

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAnimalInfo(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <figure className="hero-container">
                <img src={animalInfo.main_img_url} alt={animalInfo.animal_common_name} className="hero"/>
                <figcaption className="hero-caption">{animalInfo.animal_common_name}</figcaption>
            </figure>
            <main className="main animal-info-page">
                <h2>{animalInfo.animal_scientific_name}</h2>
            </main>
            {localStorage.authToken ? (
                <AnimalDelete animalId={animalInfo._id} />
            ) : null}
        </div>
    )
}
