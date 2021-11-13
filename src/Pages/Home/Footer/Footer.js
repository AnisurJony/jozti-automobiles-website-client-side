import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2} style={{ mx: 'auto' }}>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography> Dream Care</Typography>
                    <Typography>dreamcare@hospital.com</Typography>
                    <Typography>   +88001704568952</Typography>
                    <Typography>    bannani,dhaka</Typography>





                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography>Talk to us</Typography>
                    <Typography> About us</Typography>
                    <Typography>  Registration</Typography>
                    <Typography>   Blog</Typography>
                    <Typography>  Contract</Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography>  Support</Typography>
                    <Typography>  Documantation</Typography>
                    <Typography>  FAQs</Typography>
                    <Typography>   Conditions</Typography>


                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography> Newsletter</Typography>
                    <Typography> Get our offers & News in your inbox</Typography>
                    <br />



                    <TextField label="Enter Your Email" color="primary" size="small" focused />
                    <Button variant="outlined" style={{ height: '40px' }} >Subscribe</Button>


                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;