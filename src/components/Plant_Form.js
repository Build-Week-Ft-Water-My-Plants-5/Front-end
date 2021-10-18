import React from 'react'

export default function Plant_Form(props){
    const{
        form_values,
        change,
        errors,
        submit
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
                <button>submit</button>
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
                    <input
                        value={form_values.h2oFrequency}
                        onChange={onChange}
                        name='h2oFrequency'
                        type='text'
                        placeholder='Water schedule?'
                    />
                </label>
                <label>Image: &nbsp;
                    <input
                        type="image"
                        onChange={onChange}
                        name='image'
                        value={form_values.image}
                    />
                </label>
            </div>
        </form>
    )
}
















































