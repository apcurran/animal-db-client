import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function AnimalEdit({ match }) {
    const [animalCommonName, setAnimalCommonName] = useState("");
    const [animalScientificName, setAnimalScientificName] = useState("");
    const [animalType, setAnimalType] = useState("");
    const [animalDiet, setAnimalDiet] = useState("");
    const [animalLifespan, setAnimalLifespan] = useState("");
    const [animalSize, setAnimalSize] = useState("");
    const [animalWeight, setAnimalWeight] = useState("");
    const [animalFact, setAnimalFact] = useState("");
    const [animalDesc, setAnimalDesc] = useState("");
    const [mainImgUrl, setMainImgUrl] = useState("");
    const [error, setError] = useState("");

    let history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        const animalObj = {
            animal_common_name: animalCommonName,
            animal_scientific_name: animalScientificName,
            animal_type: animalType,
            animal_diet: animalDiet,
            animal_lifespan: animalLifespan,
            animal_size: animalSize,
            animal_weight: animalWeight,
            animal_fact: animalFact,
            animal_desc: animalDesc,
            main_img_url: mainImgUrl
        };

        const updatedAnimalObj = filterEmptyObjProps(animalObj);
        const API_URL = `https://apcurran-animaldb.herokuapp.com/api/animals/animal/${match.params.id}`;
        const options = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.authToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedAnimalObj)
        };

        const response = await fetch(API_URL, options);
        const data = await response.json();
    
        if (data.hasOwnProperty("error")) {
            setError(data.error);

            return;
        }

        history.push("/");
    }

    function filterEmptyObjProps(animalObj) {
        let updatedObj = {};

        for (const [key, val] of Object.entries(animalObj)) {
            if (val === "") continue;

            updatedObj[key] = val;
        }

        return updatedObj;
    }

    return (
        <div>
            {error ? (
                <h3 className="error">{error}</h3>
            ) : null}
            <form onSubmit={handleSubmit} className="form">
                <h2 className="form__title">Hello, Admin! (Animal Edit)</h2>
                <div className="form-group">
                    <label htmlFor="animalCommonName" className="form-group__label">Common Animal Name</label>
                    <input
                        onChange={(event) => setAnimalCommonName(event.target.value)}
                        type="text"
                        id="animalCommonName"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animalScientificName" className="form-group__label">Scientific Animal Name</label>
                    <input
                        onChange={(event) => setAnimalScientificName(event.target.value)}
                        type="text"
                        id="animalScientificName"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animalType" className="form-group__label">Animal Type</label>
                    <input
                        onChange={(event) => setAnimalType(event.target.value)}
                        type="text"
                        id="animalType"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animalDiet" className="form-group__label">Animal Diet</label>
                    <input
                        onChange={(event) => setAnimalDiet(event.target.value)}
                        type="text"
                        id="animalDiet"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animalLifespan" className="form-group__label">Animal Lifespan</label>
                    <input
                        onChange={(event) => setAnimalLifespan(event.target.value)}
                        type="text"
                        id="animalLifespan"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animalSize" className="form-group__label">Animal Size</label>
                    <input
                        onChange={(event) => setAnimalSize(event.target.value)}
                        type="text"
                        id="animalSize"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animalWeight" className="form-group__label">Animal Weight</label>
                    <input
                        onChange={(event) => setAnimalWeight(event.target.value)}
                        type="text"
                        id="animalWeight"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animalFact" className="form-group__label">Animal Fact</label>
                    <input
                        onChange={(event) => setAnimalFact(event.target.value)}
                        type="text"
                        id="animalFact"
                        className="form-group__input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animalDesc" className="form-group__label">Animal Description</label>
                    <textarea
                     onChange={(event) => setAnimalDesc(event.target.value)}
                     id="animalDesc"
                     cols="30"
                     rows="10"
                     className="form-group__input form-group__textarea"
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="mainImgUrl" className="form-group__label">Animal Img URL</label>
                    <input
                        onChange={(event) => setMainImgUrl(event.target.value)}
                        type="text"
                        id="mainImgUrl"
                        className="form-group__input"
                    />
                </div>
                <button type="submit" className="form__submit">Submit</button>
            </form>
        </div>
    )
}

