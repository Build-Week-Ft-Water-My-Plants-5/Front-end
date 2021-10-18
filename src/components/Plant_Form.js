import React from 'react'

export default function Plant_Form(props){
    const{
        values,
        // errors
    } = props

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-inputs submit'>
                <h2>Add New Plant</h2>
                <button>submit</button>
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
                        value={values.name}
                        onChange={onChange}
                        name='nickname'
                        type='text'
                    />
                </label>
                <label>Species &nbsp;
                    <input
                        value={values.species}
                        onChange={onChange}
                        name='species'
                        type='text'
                    />
                </label>
                <label>How often do you water this plant? &nbsp;
                    <input
                        value={values.h2oFrequency}
                        onChange={onChange}
                        name='h2oFrequency'
                        type='text'
                    />
                </label>
                <label>Image: &nbsp;
                    <input
                        type="image"
                        onChange={onChange}
                        name='image'
                        value={values.image}
                    />
                </label>
            </div>
        </form>
    )
}
















































