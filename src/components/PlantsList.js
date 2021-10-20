import React, {useEffect} from "react";
import Plant from "./Plant";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";


export default function PlantsList(props) {
    const {plants, set_plant_values} = props;

    useEffect(() => {
        axiosWithAuth().get("https://watermyplantsweb46.herokuapp.com/api/plants")
            .then(res => {
                set_plant_values(res.data, ...plants)
                console.log(plants)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

        if(plants.length<1){
            return <p>Add a plant!</p>
        }
        return(
            <div>
                {
                    plants.map(plant => {
                        console.log(plant)
                        return (
                            <Plant plant={plant} key={plant} plants={plants} set_plant_values={set_plant_values}/>
                        )
                    })
                }
            </div>
        )

    
}
















































