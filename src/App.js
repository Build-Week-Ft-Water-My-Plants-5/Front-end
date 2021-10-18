import React, {useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Plant_List from "./components/Plants_List";
import Plant_Form from "./components/Plant_Form";

const initialFormValues = {
    nickname: '',
    species: '',
    h2oFrequency: '',
    image:'',
    user_id:''
  }

function App() {

    const [formValues, setFormValues]=useState(initialFormValues)

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
        if(evt.target.type === 'checkbox' ? setFormValues({ ...formValues, [evt.target.name]: evt.target.checked }) :  setFormValues({ ...formValues, [evt.target.name]: evt.target.value }));
        // validate(evt.target.name, evt.target.value);
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
            <Route path="plant-list" >
                <Plant_List />
            </Route>
        </div>
        <div>
            <Route path="/Plant_Form" >
                <Plant_Form change={change} formValues={formValues}/>
            </Route>
        </div>
    </div>
     </>

  )
}

export default App;
























