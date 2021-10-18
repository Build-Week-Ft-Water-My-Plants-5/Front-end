import React from 'react'

export default function Plant_Form(props){
    const{
        formValues,
        change,
        errors
    } = props
    console.log(formValues.nickname)

    return(
        <form className='form-container' >
            <div className='form-inputs submit'>
                <h2>Add New Plant</h2>
                <button>submit</button>
                <div className='errors'>
                    {/* <div>{errors.name}</div>
                    <div>{errors.species}</div>
                    <div>{errors.h2oFrequency}</div>
                    <div>{errors.image}</div> */}
                </div>
            </div>

            <div className='form-group inputs'>
                <h3>User Information</h3>
                <label>Nickname &nbsp;
                    <input
                        value={formValues.nickname}
                        onChange={change}
                        name='nickname'
                        type='text'
                        placeholder='Nickname'
                    />
                </label>
                <label>Species &nbsp;
                    <input
                        value={formValues.species}
                        onChange={change}
                        name='species'
                        type='text'
                        placeholder='Species'
                    />
                </label>
                <label>How often do you water this plant? &nbsp;
                    <input
                        value={formValues.h2oFrequency}
                        onChange={change}
                        name='h2oFrequency'
                        type='text'
                        placeholder='Water schedule?'
                    />
                </label>
                <label>Image: &nbsp;
                    <input
                        type="image"
                        onChange={change}
                        name='image'
                        value={formValues.image}
                    />
                </label>
            </div>
        </form>
    )
}
















































