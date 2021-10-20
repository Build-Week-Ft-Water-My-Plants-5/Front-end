import React, {useEffect, useState } from "react"
import './App.css';
import axios from 'axios';
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Sign_Up";
import PlantForm from "./components/PlantForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PlantsList from "./components/PlantsList";
import Header from "./components/Header"
import UserProfile from "./components/UserProfile";




function App() {


    return (
    <div className="App">
            <div>
                <Header />
            </div>
       
         <div id="app-body">
                <Switch>
                    <Route path="/profile">
                        <UserProfile/>
                    </Route>
                    <PrivateRoute path="/PlantForm" component={PlantForm}/>
                    <PrivateRoute path="/PlantsList" component={PlantsList}/>
                    <Route path="/signup">
                        <Signup />
                    </Route>

                    <Route path="/login" component={Login}/>

                    <Route path="/login" component={Login}/>                    

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>  
            </div>     
            <Footer/>
    </div>
    

    )
}

export default App;
