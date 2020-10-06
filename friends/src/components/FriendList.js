import React, { useEffect, useState } from 'react';
import Friend from './Friend'

import {axiosWithAuth} from '../api/axiosWithAuth';


const FriendList = () => {
    const [friends, setFriends] = useState([]);
    
    useEffect(()=> {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('sg: Friends.js : useEffect : getFriends res: ', res)
                setFriends(...friends, res.data)
            })
            .catch(err => {
                console.error('there was an error setting friends :', err)
            })
    }, [])

    return (
        <section>
            <h2>My Friends</h2>
            <div>
                {friends.map(
                    friend => {
                       return <Friend key={friend.id} data={friend} />
                    })
                }
            </div>
        </section>
    );
}

export default FriendList;