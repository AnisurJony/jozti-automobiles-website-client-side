import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [addminSuccess, setAdminSuccess] = useState(false)
    const { token } = useAuth();
    console.log(token)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        console.log(token)
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setAdminSuccess(true)
                }
            })
        e.preventDefault(user)
    };




    return (
        <div>
            <h2>Make Admin An User</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    sx={{ width: '50%' }}
                    type='email'
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <br />
                <Button type='submite' variant='contained'>Make Admin</Button>
            </form>
            {addminSuccess && <Alert severity="success">Created Admin  Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;