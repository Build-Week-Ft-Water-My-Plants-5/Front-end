import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Plant(props) {
    const { push } = useHistory();
    const {plant, set_plant_values} = props;


    const delete_plant = (existing_plant) => {
        axios.delete(`https://watermyplantsweb46.herokuapp.com/api/plants/${existing_plant.id}`, existing_plant)
            .then(res => {
              props.push('/PlantList');
            })
            .catch(err => {
                console.error(err)
            })
    }
    const edit_plant = (plant) => {
        axios.put(`https://watermyplantsweb46.herokuapp.com/api/plants/${plant.id}`,plant)
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