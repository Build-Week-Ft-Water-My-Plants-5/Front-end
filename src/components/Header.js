import React from "react";
import {Link} from "react-router-dom";



export default function Header() {

    return(
        <header className="header">
            <nav>
                <Link className="header-link" to="/">Home</Link>
                <Link className="header-link" to="login">Login</Link>
                <Link className="header-link" to="/PlantForm">Add New Plant</Link>
                <Link className="header-link" to="/PlantsList">My Plants</Link>
                <Link className="header-link" to="/signup">Signup</Link>
            </nav>
            <h1>Water My Plants</h1>
        </header>

    )
}
















































