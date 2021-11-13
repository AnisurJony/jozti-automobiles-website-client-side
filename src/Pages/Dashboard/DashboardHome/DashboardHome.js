import * as React from 'react';

import { Grid, Typography } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../Hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';





const DashboardHome = () => {
    const { admin } = useAuth();

    return (
        <Typography component={'div'}>
            <Grid container spacing={2}>


                <Grid item xs={12} sm={6}>

                    {!admin && <MyOrders></MyOrders>}
                    {admin && <MakeAdmin></MakeAdmin>}

                </Grid>



            </Grid>
        </Typography>
    );
};

export default DashboardHome;