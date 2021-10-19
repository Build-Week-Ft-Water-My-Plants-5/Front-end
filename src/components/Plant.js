import React from "react";
import axios from "axios";

export default function Plant(props) {
    const {plant, set_plant_values} = props;


    const delete_plant = (existing_pant) => {
        axios.delete("https://watermyplantsweb46.herokuapp.com/plant/:id", existing_pant)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }
    const edit_plant = (plant) => {
        axios.put("https://watermyplantsweb46.herokuapp.com",)
            .then(res => {
                set_plant_values([res.data, ...plant])
            })
            .catch(err => {
                console.error(err);
            })

    }


    const update_form = evt => {
        const update_plant = {
            nickname: evt.nickname.trim(),
            species: evt.species.trim(),
            h2oFrequency: evt.h2oFrequency,
            image: evt.image.trim()
        }

        edit_plant(update_plant)
    }



    return (
        <>
            <div className="plant-card">
                <h3>Plant Info</h3>
                <p>{plant.nickname}</p>
                <p>{plant.species}</p>
                <p>{plant.h2oFrequency}</p>
                <img src={`${plant.image}`} alt={`Image of a ${plant.nickname}.`}/>
                
                <button onChange={update_form}>Edit Plant</button>
                <button onChange={delete_plant}>Delete Plant</button>
                
            </div>
        </>
    )

}