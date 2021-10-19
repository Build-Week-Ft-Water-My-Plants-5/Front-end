import React from "react";
import axios from "axios";

export default function Plant(props) {
    const {plant} = props;



    const delete_plant = (existing_pant) => {
        axios.delete("https://watermyplantsweb46.herokuapp.com/plant/:id" ,existing_pant)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }
    const edit_plant = (plant) => {
        axios.put("https://watermyplantsweb46.herokuapp.com", )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            })

    }





    return (
        <>
            <div className="plant-card">
                <h3>Plant Info</h3>
                <p>{plant.nickname}</p>
                <p>{plant.species}</p>
                <p>{plant.h2oFrequency}</p>
                <img src={`${plant.image}`} alt={`Image of a ${plant.nickname}.`}/>
                
                <button>edit</button>
                <button>delete</button>
                
            </div>
        </>
    )

}