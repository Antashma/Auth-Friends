import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <p>{props.data.name}</p>
            <p>{props.data.age}</p>
            <p>{props.data.email}</p>
        </div>
    )
}

export default Friend;