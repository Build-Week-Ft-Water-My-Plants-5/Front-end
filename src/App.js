import React, {useEffect, useState } from "react"
import './App.css';
import axios, {Axios} from 'axios';
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
}

function App() {

    const [form_values, set_form_values] = useState(initial_form_values);
    const [plants, set_plant_values] = useState(initial_plant_values);
    const [disabled, set_disabled] = useState(initial_disabled);

    console.log(plants)
    useEffect(() => {
        axios.get("https://watermyplantsbwweb46.herokuapp.com/api")
            .then(res => {
                // console.log(res.data)
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
            .finally(() =>{
                set_form_values(initial_form_values)
            }, [form_values])

    }


    const change= (evt) =>{
        if(evt.target.type === 'checkbox' ? set_form_values({ ...form_values, [evt.target.name]: evt.target.checked }) :  set_form_values({ ...form_values, [evt.target.name]: evt.target.value }));
        // validate(evt.target.name, evt.target.value);
    }
    

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => )
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


    return (
     <>
    <div className="App">
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Plant_Form">Add New Plant</Link>
                <Link to="/Plants_List">My Plants</Link>
                <Link to="/signup">Signup</Link>
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
                <Plant_Form 
                change={change} 
                form_values={form_values} 
                submit={form_submit} 
                disabled={disabled}/>
            </Route>
        </div>
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
























