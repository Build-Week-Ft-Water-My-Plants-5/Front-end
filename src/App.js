import React, {useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Login from "./components/Home";
import Signup from "./components/Sign_Up";
import Plant_List from "./components/Plants_List";
import schema from "./Form_Schema";
import * as yup from "yup";


const initial_plant_values = [];
const initial_disabled = true;

const initial_form_values = {
    nickname:"",
    species:"",
    h2oFrequency:"",
    image:"",

}


function App() {

    const [form_values, set_form_values] = useState(initial_form_values);
    const [plants, set_plant_values] = useState(initial_plant_values);
    const [disabled, set_disabled] = useState(initial_disabled);

    useEffect(() => {
        axios.get("https://watermyplantsbwweb46.herokuapp.com/api")
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })


    }, [])

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => )
    }

    return (
     <>
    <div className="App">
        Water My Plants
    </div>
    <div className="home-component">
        <Route exact path="/">
            <Login />
        </Route>
    </div>
    <div className="home-component">
        <Route path="/signup">
            <Signup />
        </Route>
    </div>
    <div>
        <Route path="/plant-list" >
            <Plant_List plants={plants}/>
        </Route>
    </div>

     </>

  )
}

export default App;
























