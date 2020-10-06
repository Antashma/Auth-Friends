import React, { useEffect, useState } from 'react';

import {axiosWithAuth} from '../api/axiosWithAuth';


const Friends = () => {
    const [friends, setFriends] = useState([]);
    
useEffect(()=> {
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('sg: Friends.js : useEffect : getFriends res: ', res)
            setFriends(res.data)
        })
        .catch(err => {
            console.error('there was an error setting friends :', err)
        })
}, [])

    return <>FRIENDS here</>;
}

export default Friends;