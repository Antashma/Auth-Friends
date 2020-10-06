import React, { useEffect, useState } from 'react';
import FriendDetails from './FriendDetails'
import {Link, Route} from 'react-router-dom';
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
            <nav>
                <Link to='/add' >Add Friend</Link>
            </nav>
            <h2>My Friends</h2>
            <div className='friends-container'>
                <div className='friend-names'>
                    {friends.map(
                        friend => {
                            return ( 
                                <p><Link 
                                    to={`/friends/${friend.id}`}
                                    key={friend.id}
                                >
                                    {friend.name}
                                </Link></p>
                            )
                        })
                    }
                </div>
                <Route 
                    path='/friends/:id' 
                    render={() => <FriendDetails data={friends} />} 
                />    
            </div>
           
        </section>
    );
}

export default FriendList;