import React, { useEffect, useState } from 'react';

import {getFriends} from '../api/getFriends';


const Friends = () => {
    const [friends, setFriends] = useState([]);
    
useEffect(()=> {
    getFriends()
        .then(res => console.log('sg: Friends.js : useEffect : getFriends res: ', res))
        .catch(err => console.log('there was an error setting friends :', err))
}, [])

    return <>FRIENDS here</>;
}

export default Friends;