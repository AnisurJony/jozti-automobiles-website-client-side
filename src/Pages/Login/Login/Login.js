import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory()

    console.log(loginData)

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
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


                        <Button variant='contained' sx={{ width: '75%', m: 1 }} type='submit'>Login</Button>

                        <NavLink to='/register' style={{ textDecoration: 'none' }}><Button variant="text">New User? Please Register</Button></NavLink>

                        {isLoading && <CircularProgress />}

                        {user?.email && <Alert severity="success">User Login  Successfully!</Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>----------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained' sx={{ width: '30%', m: 1 }} type='submit'>Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;