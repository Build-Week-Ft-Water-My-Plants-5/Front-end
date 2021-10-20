import React from "react";
import axiosWithAuth from "./axiosWithAuth";
import { useHistory } from "react-router-dom";

export default function Plant(props) {
    const { push } = useHistory();
    const {plant, set_plant_values, plants} = props;


    const delete_plant = () => {
        // e.preventDefault();
        console.log(plant)
        axiosWithAuth().delete(`https://watermyplantsweb46.herokuapp.com/api/plants/${plant.plants_id}`, plant)
            .then(res => {
            set_plant_values([res.data])
            push('/PlantsList');
            })
            .catch(err => {
                console.error(err)
            })
    }


    const edit_plant = (plant) => {
        axiosWithAuth().put(`https://watermyplantsweb46.herokuapp.com/api/plants/${plant.id}`,plant)
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
                <p>Nickname: {plant.nickname}</p>
                <p>Species: {plant.species}</p>
                <p>Water frequency? {plant.h2oFrequency}</p>
                <img src={`${plant.image}`} alt={`Image of a ${plant.nickname}.`}/>
                <button onChange={update_form}>Edit Plant</button>
                <button onClick={delete_plant}>Delete Plant</button>
            </div>
        </>
    )

}