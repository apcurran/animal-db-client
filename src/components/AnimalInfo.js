import React, { useState, useEffect } from 'react';
import AnimalDelete from "./AnimalDelete";
import AnimalEditLink from './AnimalEditLink';

export default function AnimalInfo({ match }) {
    const [animalInfo, setAnimalInfo] = useState({});
    const API_URL = `http://localhost:5000/api/animals/animal/${match.params.id}`;

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
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
            <main className="animal-info-page">
                <article className="animal-info-card">
                    <p className="animal-info-card__para">
                        Scientific Name: <span>{animalInfo.animal_scientific_name}</span>
                    </p>
                    <p className="animal-info-card__para">
                        Animal Type: <span>{animalInfo.animal_type}</span>
                    </p>
                    <p className="animal-info-card__para">
                        Diet: <span>{animalInfo.animal_diet}</span>
                    </p>
                    <p className="animal-info-card__para">
                        Lifespan: <span>{animalInfo.animal_lifespan}</span>
                    </p>
                    <p className="animal-info-card__para">
                        Weight: <span>{animalInfo.animal_weight}</span>
                    </p>
                </article>
                <p className="animal-info-desc">
                    {animalInfo.animal_desc}
                </p>
                <article className="animal-info-fact">
                    <h3 className="animal-info-fact__title">Did You Know?</h3>
                    <p className="animal-info-fact__para">{animalInfo.animal_fact}</p>
                </article>
                {localStorage.authToken ? (
                    <div className="">
                        <AnimalDelete animalId={animalInfo._id} />
                        <AnimalEditLink animalId={animalInfo._id} />
                    </div>
                ) : null}
            </main>
        </div>
    )
}
