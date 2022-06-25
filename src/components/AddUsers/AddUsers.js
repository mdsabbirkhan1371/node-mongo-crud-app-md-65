import React from 'react';

const AddUsers = () => {

    const handleAdduser = event => {


        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const user = { name, email }
        console.log(user)


        // send data in backend

        fetch('http://localhost:5000/user', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert("User Added successfully")
                event.target.reset();
            })

    }

    return (
        <div>
            <h1>Please Add your Users</h1>
            <form onSubmit={handleAdduser}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="AddUser" />

            </form>
        </div>
    );
};

export default AddUsers;