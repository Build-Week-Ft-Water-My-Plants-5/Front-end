<<<<<<< HEAD
import React from 'react';

export default function Signup() {

    return (
        <>
            <form id='singup-form'>
=======
import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
    username: "",
    password:"",
    phonenumber: ""
};

export default function Signup() {
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
        axios.post('https://watermyplantsweb46.herokuapp.com/auth/register', formValues)
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
            <form id='singup-form' onSubmit={handleSubmit}>
>>>>>>> a03fe8610642afe491edd9a91f20d943e2263457
                <h1>Create an account</h1>
                <p>Already have an account? Login here!</p>

                <div className="form-inputs" id="signup-inputs">
<<<<<<< HEAD
                     <input
                        value="phonenumber"
                        name="phone"
                        type="tel"
                        placeholder="phone number"
                    />  

                    <input
                        value="username"
                        name="username"
                        type="text"
                        placeholder="username"
                    />

                    <input
                        value="password"
                        name="username"
                        type="password"
                        placeholder="password"
                    />
=======
                    <label htmlFor="username">Username:</label>
                    <input
                        value=""
                        id="username"
                        name="username"
                        type="text"
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        value="" 
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />

                    <label htmlFor="phonenumber">Phone Number:</label>
                    <input
                        value=""
                        id="phonenumber"
                        name="phonenumber"
                        type="tel"
                        onChange={handleChange}
                    />  
>>>>>>> a03fe8610642afe491edd9a91f20d943e2263457
                </div>

                <div className="errors">

                </div>

                <button id='signup'>Signup</button>
            </form>
        </>
    )
}















