import React from "react";
import {Link} from "react-router-dom";
import "./header.css";



export default function Header() {

    return(
        <header id="header">
            <h1>Water My Plants</h1>
            <nav>
                <Link className="header-link" to="/">Home</Link>
                <Link className="header-link" to="login">Login</Link>
                <Link className="header-link" to="/PlantForm">Add New Plant</Link>
                <Link className="header-link" to="/PlantsList">My Plants</Link>
                <Link className="header-link" to="/signup">Signup</Link>
            </nav>
        </header>
    )
}
















































