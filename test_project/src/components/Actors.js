import React from 'react';

const Actors = (prop) => {

    return (
        <div>
            <h2>{prop.id}</h2>
            <p>{prop.name}</p>
        </div>
    );
};

export default Actors;