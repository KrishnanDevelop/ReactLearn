import React, { useState } from "react";

function Scooter() {
    const [Brand, setBrand] = useState('Bajaj');
    const [Color, setColor] = useState('Yellow');
    const [Model, setModel] = useState('Hundai');
    const [scooter, setScooter] = useState({
        Brand: 'Bajaj',
        Color: 'Yellow',
        Model: 'Hundai',
        Year: '2025',
    });

    function changeColor() {
        setScooter((previous) => {
            return {...previous, Color:"green"}
        })
    }
    return <>
        <h1>My Scooter</h1>
        <ul>
            <li>Brand: {scooter.Brand}</li>
            <li>Color: {scooter.Color}</li>
            <li>Model: {scooter.Model}</li>
            <li>Year: {scooter.Year}</li>
        </ul>
        <button onClick={changeColor}>ChangeColor</button>
    </>
}

export default Scooter;