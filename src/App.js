import React, {useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Login from "./components/Home";
import Signup from "./components/Sign_Up";
import Plant_List from "./components/Plants_List";
import Plant from "./components/Plant";


const initial_plant_values = [];


function App() {

    const [form_values, set_form_values] = useState([]);
    const [plants, set_plant_values] = useState(initial_plant_values);




    useEffect(() => {
        axios.get("https://watermyplantsbwweb46.herokuapp.com/api")
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })


    }, [])

    return (
     <>
    <div className="App">
        Water My Plants
    </div>
    <div className="home-component">
        <Route path="/">
            <Login />
        </Route>
    </div>
    <div className="home-component">
        <Route path="/signup">
            <Signup />
        </Route>
    </div>
    <div>
        <Route path="plant-list" >
            <Plant_List plants={plants}/>
        </Route>
    </div>

     </>

  )
}

export default App;
























