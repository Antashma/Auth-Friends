import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../api/axiosWithAuth';


const AddFriendForm = (props) => {
    const [friends, setFriends] = useState({
        name: ' ',
        age: 1, 
        email: '',
    })

    const [newFriend, setNewFriend] = useState({
        name: 'Archie Andrews',
        age: 1, 
        email: 'archie@riverdale.com',
    });

    const handleChanges = e => {
        setNewFriend({
            ...newFriend, 
            [e.target.name]:e.target.value}
        )
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                console.log('added new friend!', res)
                props.history.push('/friends')
            })
            .catch(err => console.log('unable to add friend:', err))
         
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type='text' name='name' onChange={handleChanges} value={newFriend.name}/>
                </label>
                <br />
                <label>Age:
                    <input type='number' name='age' onChange={handleChanges} value={newFriend.age}/>
                </label>
                <br />
                <label>Email:
                    <input type='email' name='email' onChange={handleChanges} value={newFriend.email}/>
                </label>
                <button>Add Friend</button>
            </form>
        </section>
       
    )
}

export default AddFriendForm;