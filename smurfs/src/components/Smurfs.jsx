import React from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

import Smurf from './Smurf';

const Smurfs = () => {
    return (
        <SmurfContext.Consumer>
            {smurfData => {
                return (
                    <div className='Smurfs'>
                        <h3>Here are the smurfs:</h3>
                        {smurfData.map(smurf => <Smurf smurf={smurf} /> )}
                    </div>
                );
            }}
        </SmurfContext.Consumer>
    );
};

export default Smurfs;