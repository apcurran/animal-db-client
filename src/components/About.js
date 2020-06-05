import React from 'react';
import Turtle from "../images/turtle-swim.jpg";

export default function About() {
    return (
        <main className="main about">
            <h1 className="about__title">About</h1>
            <img className="about__img" src={Turtle} alt="Turtle swimming in the ocean."/>
            <p className="about__desc">
                Animal DB is the premier resource for animal facts. With facts provided by National Geographic, you can experience the wonder of nature's animal kingdom from anywhere. Browse through our index of animals, or use our handy search feature to find a specific animal you are looking for. Enjoy!
            </p>
        </main>
    )
}
