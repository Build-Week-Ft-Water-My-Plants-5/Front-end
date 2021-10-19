import React, {useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Login from "./components/Home";
import Signup from "./components/Sign_Up";
import Plant from "./components/Plant";
import PlantForm from "./components/Plant_Form"
import Home from "./components/Home"
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



const initialFormValues = {
    nickname: '',
    species: '',
    h2oFrequency: '',
    image:'',
    user_id:''
  }

function App() {

    const [form_values, set_form_values] = useState(initial_form_values);
    const [plants, set_plant_values] = useState(initial_plant_values);
    const [disabled, set_disabled] = useState(initial_disabled);

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


    // const validate = (name, value) => {
    //     yup.reach(schema, name)
    //         .validate(value)
    //         .then(() => )
    // }

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
                <PlantForm change={change} form_values={form_values}/>
            </Route>
        </div>
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
























