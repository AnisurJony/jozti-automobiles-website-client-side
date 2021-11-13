
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg'
const Register = () => {


    const { user, registerUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }



    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('Password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }




    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 8 }} xs={12} md={6} >

                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>


                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard" />


                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                            variant="standard" />


                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label=" Your Password"
                            name='password'
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard"
                        />


                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Re Type Your Password"
                            name='password2'
                            onBlur={handleOnBlur}
                            type="password2"
                            variant="standard"
                        />


                        <Button variant='contained' sx={{ width: '75%', m: 1 }} type='submit'>Register</Button>

                        <NavLink to='/login' style={{ textDecoration: 'none' }}><Button variant="text">Already Registerd? Please Login</Button></NavLink>


                    </form>}



                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">User Created  Successfully!</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}



                </Grid>

                <Grid item xs={12} md={6}>

                    <img style={{ width: '100%' }} src={login} alt="" />

                </Grid>

            </Grid>


        </Container>
    );
};

export default Register;