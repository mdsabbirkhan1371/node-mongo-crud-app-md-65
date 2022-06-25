import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const Home = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const deleteUser = id => {
        const proced = window.confirm('Are You sure Want to Delete This??')
        if (proced) {
            console.log('Id deleted', id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted')
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h1>Welcome</h1>
            <h3>Total Users: {users.length}</h3>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >Name: {user.name}......email: {user.email}
                        <Link to={`/update/${user._id}`}><button>Update User</button></Link>
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;