import React from 'react';

export default function Signup() {

    return (
        <>
            <form id='singup-form'>
                <h1>Create an account</h1>
                <p>Already have an account? Login here!</p>

                <div className="form-inputs" id="signup-inputs">
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
                </div>

                <div className="errors">

                </div>

                <button id='signup'>Signup</button>
            </form>
        </>
    )
}















