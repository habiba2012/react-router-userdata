import { useParams } from 'react-router';
import React,{useEffect, useState } from 'react'

const UserDetails = (props) => {
    let {userId} = useParams()
     const [user, setUser] = useState({})
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    const userStyle ={
        border: '1px solid blue',
        borderRadius:'20px',
        margin:'30px',
        padding:'20px',
        width: '350px'
    }
    return (
        <div style={userStyle}>
            <h3>User details information of {userId}</h3>
            <h4>name: {user.name}</h4>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
        </div>
    );
};

export default UserDetails;