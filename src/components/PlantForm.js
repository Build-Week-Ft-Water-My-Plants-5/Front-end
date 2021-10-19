import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import schema from "../Form_Schema";


const initial_disabled = true;

const initial_form_values = {
    nickname: "",
    species: "",
    h2oFrequency: "",
    image:""
}

const initial_form_errors={
    nickname:"",
    species:"",
    h2oFrequency:"",
    image:""
}

export default function PlantForm(props){
    const { plants, set_plant_values} = props

    const [form_values, set_form_values] = useState(initial_form_values);

    const [disabled, set_disabled] = useState(initial_disabled);
    const [errors, set_errors]=useState(initial_form_errors);



    const post_new_plant = new_plant => {
        axios.post("https://watermyplantsbwweb46.herokuapp.com/api", new_plant)
            .then(res=> {
                set_plant_values([res.data, ...plants])
            })
            .catch(err => {
                console.error(err)
            })
            .finally( () =>{
                set_form_values(initial_form_values)
            })

    }

    const change= (name, value) =>{
        set_form_values({ ...form_values, [name]: value });
        // validate(evt.target.name, evt.target.value);
    }


    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => set_errors({...errors, [name]:""}) )
            .catch(err => set_errors({errors, [name]: err.errors[0]}))
    }

    const form_submit = () => {
        const new_plant = {
            nickname: form_values.nickname.trim(),
            species: form_values.species.trim(),
            h2oFrequency: form_values.h2oFrequency.trim(),
            image: form_values.image.trim()
        }
        post_new_plant(new_plant);
    }

    useEffect(() => {
        schema.isValid(form_values).then(valid => set_disabled(!valid))
    },[form_values])


    const onSubmit = evt => {
        evt.preventDefault();
        form_submit();
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
                {/* <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.species}</div>
                    <div>{errors.h2oFrequency}</div>
                    <div>{errors.image}</div>
                </div> */}
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
                        type="text"
                        onChange={onChange}
                        name='image'
                        value={form_values.image}

                    />
                </label>
                <button disabled={disabled} className="save-plant">submit</button>

            </div>
        </form>
    )
}

