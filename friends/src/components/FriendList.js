import React, { useEffect, useState } from 'react';
import {Link, Route} from 'react-router-dom';

import FriendDetails from './FriendDetails'

import {axiosWithAuth} from '../api/axiosWithAuth';


const FriendList = () => {
    const [friends, setFriends] = useState([]);
    
    useEffect(()=> {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => setFriends(...friends, res.data))
            .catch(err => {
                console.error('there was an error setting friends :', err)
            })
    }, [])

    return (
        <section>
            <h2>My Friends</h2>
            <p>Click on your Friend's name below for more details.</p>
            <p>Have a new Friend? <Link to='/add-friend'>Click here</Link> to add them.</p>
            <div className='friends-container'>
                <div className='friend-names'>
                    {friends.map( friend => {
                        return ( 
                            <p key={friend.id}>
                                <Link to={`/friends/${friend.id}`}>
                                    {friend.name}
                                </Link>
                            </p>
                        )
                    })}
                </div>
                <Route 
                    path='/friends/:id' 
                    render={() => <FriendDetails data={friends} />} 
                /> 
            </div>
            <Link className='add-friend-btn' to='/add-friend' >Add Friend</Link>
        </section>
    );
}

export default FriendList;