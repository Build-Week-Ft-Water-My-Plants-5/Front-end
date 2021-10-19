import React from "react";
import { Link } from "react-router-dom";
import Plant from "./Plant";


export default function PlantsList(props) {
    const {plants} = props;

    return (
        <div>
            {
                plants.map(plant => {
                    console.log(plant)
                    return (
                        <Plant plant={plant} key={plant}/>
                    )
                })
            }

        </div>
    )
}
















































