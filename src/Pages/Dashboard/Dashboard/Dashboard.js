import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';


const drawerWidth = 210;

const Dashboard = (props) => {

    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <Divider />
            <Link to='/home' style={{ textDecoration: 'none' }}><Button color="inherit">Home</Button></Link> <br />

            {!admin && <Box>
                <Link to={`${url}`} style={{ textDecoration: 'none' }}><Button color="inherit">My Orders</Button></Link>
                <br />
                <Link to='/review' style={{ textDecoration: 'none' }}><Button color="inherit">Review</Button></Link>
                <br />
                <Link to='/paynow' style={{ textDecoration: 'none' }}><Button color="inherit">Pay Now</Button></Link>

            </Box>}
            {
                admin && <Box>
                    <Link to={`${url}/manageallorders`} style={{ textDecoration: 'none' }}><Button color="inherit">Manage All Orders</Button></Link>
                    <Link to={`${url}/manageproducts`} style={{ textDecoration: 'none' }}><Button color="inherit" >Manage Products</Button></Link>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button color="inherit" >Make Admin</Button></Link>
                    <Link to={`${url}/addProduct`} style={{ textDecoration: 'none' }}><Button color="inherit" >Add Product</Button></Link>

                </Box>
            }

            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />


            <AppBar
                position="fixed"


                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },

                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"

                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}

                        sx={{ mr: 2, display: { sm: 'none' } }}

                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        My jozti Deshboard
                    </Typography>
                </Toolbar>
            </AppBar>



            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"


            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>


                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>


            </Box>



            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>

                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

                    <AdminRoute path={`${path}/manageallorders`} >
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`} >
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`} >
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`} >
                        <AddProduct></AddProduct>
                    </AdminRoute>

                </Switch>
            </Box>


        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
