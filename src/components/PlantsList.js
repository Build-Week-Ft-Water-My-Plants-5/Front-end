import React from "react";
import Plant from "./Plant";


export default function PlantsList(props) {
    const {plants, set_plant_values} = props;

    return (
        <div>
            {
                plants.map(plant => {
                    console.log(plant)
                    return (
                        <Plant plant={plant} key={plant} set_plant_values={set_plant_values}/>
                    )
                })
            }

        </div>
    )
}
















































