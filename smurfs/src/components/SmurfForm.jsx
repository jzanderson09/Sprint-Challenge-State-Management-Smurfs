import React, { useState } from 'react';
import './sass/SmurfForm.scss';

const SmurfForm = ({ addSmurf }) => {
    const [smurf, setSmurf] = useState({ name: '', age: '', height: '' });

    const changeHandler = e => {
        e.preventDefault();
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    }

    return (
        <div className='SmurfForm'>
            <form onSubmit={addSmurf(smurf)}>
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