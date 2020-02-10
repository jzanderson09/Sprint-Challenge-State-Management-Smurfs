import React from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import './sass/Smurfs.scss';

import Smurf from './Smurf';

const Smurfs = () => {
    return (
        <SmurfContext.Consumer>
            {state => {
                return (
                    <div className='Smurfs'>
                        <h3>Here are the smurfs:</h3>
                        {state.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} /> )}
                    </div>
                );
            }}
        </SmurfContext.Consumer>
    );
};

export default Smurfs;