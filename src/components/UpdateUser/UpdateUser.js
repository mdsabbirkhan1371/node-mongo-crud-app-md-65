import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);


    const updateUser = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const updatedUser = { name, email }
        console.log(updatedUser)


        // send data in backend
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert("User Update successfully")
                event.target.reset();
            })

    }
    return (
        <div>
            <h3> Update user: {user.name}</h3>

            <form onSubmit={updateUser}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="Update" />

            </form>
        </div>
    );
};

export default UpdateUser;