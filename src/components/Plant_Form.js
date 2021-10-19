import React from 'react';
import styled from "styled-components";


export default function Plant_Form(props){
    const{
        form_values,
        change,
        errors,
        submit,
        disabled
    } = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        change(name, value);
    }

    return(
        <form className='form-container' onSubmit={onSubmit} >
            <div className='form-inputs submit'>
                <h2>Add New Plant</h2>
                <button disabled={disabled}>submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.species}</div>
                    <div>{errors.h2oFrequency}</div>
                    <div>{errors.image}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h3>User Information</h3>
                <label>Nickname &nbsp;
                    <input
                        value={form_values.nickname}
                        onChange={onChange}
                        name='nickname'
                        type='text'
                        placeholder='Nickname'
                    />
                </label>
                <label>Species &nbsp;
                    <input
                        value={form_values.species}
                        onChange={onChange}
                        name='species'
                        type='text'
                        placeholder='Species'
                    />
                </label>
                <label>How often do you water this plant? &nbsp;
                    {/*<input*/}
                    {/*    value={form_values.h2oFrequency}*/}
                    {/*    onChange={onChange}*/}
                    {/*    name='h2oFrequency'*/}
                    {/*    type='text'*/}
                    {/*    placeholder='Water schedule?'*/}
                    {/*/>*/}
                    <select name="h2oFrequency" onChange={onChange}>
                        <option value="none">None</option>
                        <option value="Twice a day">Twice a day</option>
                        <option value="Once a day">Once a day</option>
                        <option value="Every other day">Every other day</option>
                        <option value="Twice a week">Twice a week</option>
                    </select><br/><br/>
                </label>
                <label>Image: &nbsp;
                    <input
                        type="image"
                        onChange={onChange}
                        name='image'
                        value={form_values.image}
                        alt="Plant image"
                    />
                </label>
                <nav className="save-plant">
                    <button onChange={onChange}>Save Plant</button>
                </nav>
                <nav className="delete-plant">
                    <button onChange={onChange}>Delete Plant</button>
                </nav>
            </div>
        </form>
    )
}
















































