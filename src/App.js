import React, {useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Login from "./components/Home";
import Signup from "./components/Sign_Up";
import PlantForm from "./components/PlantForm"
import Home from "./components/Home"
import PlantsList from "./components/PlantsList";
import schema from "./Form_Schema";
import * as yup from "yup";

const initial_plant_values = [];
const initial_disabled = true;

const initial_form_values = {
    nickname: "",
    species: "",
    h2oFrequency: "",
    image:""
  }

const initial_form_errors={
    nickname:"",
    species:"",
    h2oFrequency:"",
    image:""
}


function App() {

    const [form_values, set_form_values] = useState(initial_form_values);
    const [plants, set_plant_values] = useState(initial_plant_values);
    const [disabled, set_disabled] = useState(initial_disabled);
    const [errors, set_errors]=useState(initial_form_errors);

    useEffect(() => {
        axios.get("https://watermyplantsbwweb46.herokuapp.com/api")
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const post_new_plant = new_plant => {
        axios.post("https://watermyplantsbwweb46.herokuapp.com/api", new_plant)
            .then(res=> {
                set_plant_values([res.data, ...plants])
            })
            .catch(err => {
                console.error(err)
            })
            .finally( () =>{
                set_form_values(initial_form_values)
            }, )

    }

    const change= (name, value) =>{
        set_form_values({ ...form_values, [name]: value });
        // validate(evt.target.name, evt.target.value);
    }


    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => set_errors({...errors, [name]:""}) )
            .catch(err => set_errors({errors, [name]: err.errors[0]}))
    }

    const form_submit = () => {
        const new_plant = {
            nickname: form_values.nickname.trim(),
            species: form_values.species.trim(),
            h2oFrequency: form_values.h2oFrequency.trim(),
            image: form_values.image.trim()
        }
        post_new_plant(new_plant);
    }

    useEffect(() => {
        schema.isValid(form_values).then(valid => set_disabled(!valid))
    },[form_values])


    return (
    <div className="App">
        <header className="header">
            <nav>
                <Link className="header-link" to="/">Home</Link>
                <Link className="header-link" to="/Plant_Form">Add New Plant</Link>
                <Link className="header-link" to="/Plants_List">My Plants</Link>
                <Link className="header-link" to="/signup">Signup</Link>
            </nav>
            <h1>Water My Plants</h1>
        </header>
        <div className="home-component">
            <Route path="/">
                <Home />
            </Route>
        </div>
        <div>
            <Route path="/Plant_Form" >
                <PlantForm 
                change={change} 
                form_values={form_values} 
                submit={form_submit} 
                disabled={disabled}/>
            </Route>
        </div>
        <div className="home-component">
            <Route path="/signup">
                <Signup />
            </Route>
        </div>
        <div>
            <Route path="/Plants_List" >
                <PlantsList plants={plants}/>
            </Route>
        </div>
    </div>
  )
}

export default App;
