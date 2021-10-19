import React, { useState } from 'react';
import  axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import "./login.css"

const initialValues = {
    username: "",
    password:""
};


export default function Login() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://watermyplantsweb46.herokuapp.com/api/auth/login', formValues)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token);
            push('/Plant_List');
        })
        .catch(err => {
            console.log(err.message);
        })
        .finally(() => {
            setFormValues(formValues)
        })
    };

    return (
        <>
            <form id="login-form" onSubmit={handleSubmit}>
                <h1>Login to view your plants.</h1>
                <p>Don't have a login? <Link to="/signup">Create one!</Link></p>

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
                </div>

                <div className="errors">

                </div>

                <button id="login">Login</button>
            </form>
        </>
    )
}