import React, { useState } from 'react';
import './sass/SmurfForm.scss';

const SmurfForm = ({ addSmurf, statusMessage }) => {
    const [smurf, setSmurf] = useState({ name: '', age: '', height: '' });

    const changeHandler = e => {
        e.preventDefault();
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    }

    const submitForm = e => {
        window.alert('Success!  Smurf added!');
        addSmurf(smurf);
    }

    return (
        <div className='SmurfForm'>
            <form onSubmit={submitForm}>
                <input 
                    name='name'
                    placeholder='Name'
                    value={smurf.name}
                    onChange={changeHandler}
                    autoComplete='off'
                />
                <input 
                    name='age'
                    placeholder='Age (Years)'
                    value={smurf.age}
                    onChange={changeHandler}
                    autoComplete='off'
                />
                <input 
                    name='height'
                    placeholder='Height (Inches)'
                    value={smurf.height}
                    onChange={changeHandler}
                    autoComplete='off'
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SmurfForm;