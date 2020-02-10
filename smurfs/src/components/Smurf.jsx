import React from 'react';
import './sass/Smurf.scss';

const Smurf = ({ smurf }) => {
    return (
        <div className='Smurf'>
            <h3>Name: {smurf.name}</h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}cm</p>
        </div>
    );
};

export default Smurf;