import React from 'react';
import axios from 'axios';

export default function Login() {
    

    return (
        <>
            <form id="login-form">
                <h1>Login to view your plants.</h1>
                <p>Don't have a login? Create one!</p>

                <div className='form-inputs' id='login-inputs'>
                    <input
                        name="username"
                        type="text"
                        placeholder="username"
                    />

                    <input
                        name="username"
                        type="password"
                        placeholder="password"
                    />
                </div>

                <div className="errors">

                </div>

                <button id='login'>Login</button>

            </form>
        </>
    )
}