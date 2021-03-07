import React from 'react';
import {Link, useHistory} from 'react-router-dom'

const User = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    const handleClick = (userId) => {
        const url = `/user/${userId}`
        history.push(url) 
    }

    const friendStyle ={
        border: '1px solid red',
        borderRadius:'20px',
        margin:'10px',
        padding:'10px',
        width: '350px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            {/* <Link to={`/user/${id}`}><button>Show details of {id}</button></Link> */}
             <button onClick={() =>handleClick(id)}>Show details</button>
        </div>
    );
};

export default User;