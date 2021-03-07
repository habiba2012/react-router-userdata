import React from 'react';
import {useEffect, useState} from 'react';

import User from '../User/User';


const Home = () => {
    const[friends, setFriends] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
  
    })
    return (
        <div>
             <h2>Friend:{friends.length}</h2>
      {
        friends.map(friend => <User friend={friend}></User>)
      }
        </div>
    );
};

export default Home;