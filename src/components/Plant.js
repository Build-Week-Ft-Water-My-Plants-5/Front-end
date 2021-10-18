import React from "react";

export default function Plant(props) {
    const {plant} = props;
    console.log(plant)
    return (
        <>
            <div className="plant-card">
                <h3>Plant Info</h3>
                <p>{plant.nickname}</p>
                <p>{plant.species}</p>
                <p>{plant.h2oFrequency}</p>
                <img src={plant.image} alt={plant.alt}/>
            </div>
        </>
    )

}
















































