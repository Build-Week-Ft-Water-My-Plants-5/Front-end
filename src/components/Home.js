import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import "./Home.css"

const initialValues = {
    username: "",
    password:"",
    phonenumber: ""
};


export default function Login() {
    // const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://watermyplantsweb46.herokuapp.com/auth/login', formValues)
        .then((res) => {
            window.localStorage.setItem('token', res.data.payload);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setFormValues(initialValues)
        })
    };

    return (
        <>
            <form id="login-form" onSubmit={handleSubmit}>
                <h1>Login to view your plants.</h1>
                <p>Don't have a login? Create one!</p>

                <div className='form-inputs' id='login-inputs'>
                    <input
                        value={formValues.username}
                        name="username"
                        type="text"
                        placeholder="username"
                        onChange={handleChange}
                    />

                    <input
                        value={formValues.password}
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={handleChange}
                    />

                    <input
                        value={formValues.phonenumber}
                        name="phonenumber"
                        type="tel"
                        placeholder="phone number"
                        onChange={handleChange}
                    />
                </div>

                <div className="errors">

                </div>

                <button id="login">Login</button>
            </form>
        </>
    )
}