import React from 'react';
import logo from '../../../images/jozti.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {

            main: deepPurple[500],
        },
        secondary: {

            main: '#11cb5f',
        },
    },
});
const Navigation = () => {
    const { user, logOut } = useAuth();



    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary" style={{ height: '83px' }} >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" style={{ display: 'flex' }} sx={{ flexGrow: 1 }}>

                            <img style={{ width: '100px' }} src={logo} alt="" />

                        </Typography>
                        <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>
                        <Link to='/exploreproducts' style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Explore</Button></Link>

                        {user?.email ?
                            <Box>


                                <NavLink to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>

                                <Button color="inherit" style={{ textDecoration: 'none', color: 'white' }} onClick={logOut}>Logout</Button>

                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"

                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </Box>


                            :
                            <NavLink to='/login'>
                                <Button color="inherit" style={{ textDecoration: 'none', color: 'white' }}>Login</Button>
                            </NavLink>
                        }


                    </Toolbar>
                </AppBar>
            </Box >
        </ThemeProvider>
    );
};

export default Navigation;