import React from 'react';
import {useParams} from 'react-router-dom'

const FriendDetails = (props) => {
    const {id} = useParams();
    const selectedFriend = props.data.filter(friend => friend.id == id)
 return (
     <div className='friend-details'>
        {selectedFriend.length < 1 
            ? <p>Loading...</p>
            : (
            <div>
                <h3>{selectedFriend[0].name}</h3>
                <p>age: {selectedFriend[0].age}</p>
                <p>email: {selectedFriend[0].email}</p>
            </div>
            )}
     </div>
     
 )
}

export default FriendDetails;