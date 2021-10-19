import React, {useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Sign_Up";
import PlantForm from "./components/PlantForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PlantsList from "./components/PlantsList";
import schema from "./Form_Schema";
import * as yup from "yup";
import Header from "./components/Header"
const initial_plant_values = [];

function App() {
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
    <div className="App">
            <div>
                <Header />
            </div>
       
            <Switch>
                <Route path="/PlantForm">
                    <PlantForm plants = {plants} set_plant_values={set_plant_values}/>
                </Route>
                <Route path="/PlantsList">
                    <PlantsList plants={plants}/>  
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login" component={Login}/>
                    
                <Route path="/">
                    <Home />
                </Route>
            </Switch>       
</div>
    

    )
}

export default App;
