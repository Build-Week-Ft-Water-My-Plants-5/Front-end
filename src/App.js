import React, {useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Login from "./components/Home";
import Signup from "./components/Sign_Up";
import Plant from "./components/Plant";
import Plant_Form from "./components/Plant_Form"
import Home from "./components/Home"
import Plants_List from "./components/Plants_List";
import schema from "./Form_Schema"
import * yup from "yup";


const initial_plant_values = [];
const initial_disabled = true;

const initial_form_values = {
    nickname: "",
    species: "",
    h2oFrequency: "",
    image:"",

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
    const [errors, set_errors]=useState(initial_form_errors)




    useEffect(() => {
        axios.get("https://watermyplantsbwweb46.herokuapp.com/api")
            .then(res => {
                // console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const change= (evt) =>{
        if(evt.target.type === 'checkbox' ? set_form_values({ ...form_values, [evt.target.name]: evt.target.checked }) :  set_form_values({ ...form_values, [evt.target.name]: evt.target.value }));
        // validate(evt.target.name, evt.target.value);
    }
    
    const submit = evt => {
        const newPlant = {
            nickname: form_values.nickname.trim(),
            species: form_values.species.trim(),
            h2oFrequency: form_values.h2oFrequency.trim(),
            image: form_values.image.trim(),
           
        }
        // postPlant(newPlant)
        console.log(newPlant)
    }

    return (
     <>
    <div className="App">
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Plant_Form">Add New Plant</Link>
                <Link to="/Plants_List">My Plants</Link>
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
                <Plant_Form change={change} form_values={form_values} submit={submit}/>
            </Route>
        </div>
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
        <Route path="/Plants_List" >
            <Plants_List plants={plants}/>
        </Route>
    </div>

     </>

  )
}

export default App;
























