import React, { useState, useEffect } from 'react';

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
        <main className="main animal-info-page">
            <h1>{animalInfo.animal_common_name}</h1>
            <h2>{animalInfo.animal_scientific_name}</h2>
            <figure>
                <img src={animalInfo.main_img_url} alt={animalInfo.animal_common_name}/>
            </figure>
        </main>
    )
}
