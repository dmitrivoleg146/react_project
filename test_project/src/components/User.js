import React from 'react';

const User = (prop) => {
    return (
        <div>
            <div></div>
            {prop.id} -- {prop.name} -- {prop.username} -- {prop.email}
        </div>
    );
};

export default User;