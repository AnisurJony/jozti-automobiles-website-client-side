import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg.png'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {

            main: teal[500],
        },
        secondary: {

            main: '#009688',
        },
        main: {

            main: green[500],
        },
        sub: {

            main: '#81c784',
        },



    }


});
const bannerBackground = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,


}

const Banner = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={bannerBackground} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    <Grid container item xs={12} md={6} style={{ ...verticalCenter }}>
                        <Box style={{ textAlign: 'left' }}>
                            <Typography variant='h3' color="main" sx={{ mb: 3 }} >
                                <Typography span variant='h3' color="primary"> Your New Smile</Typography >
                                Starts Here
                            </Typography>
                            <Typography variant='h6' style={{ color: '#795548', fontSize: '14px', fontWeight: '300' }}>
                                Doctor is a 2021 Indian Tamil-language action comedy film directed by Nelson Dilipkumar.<br /> The film stars Sivakarthikeyan who also produced it under his ..
                            </Typography>
                            <Link to='/exploreproducts' style={{ textDecoration: 'none' }}>
                                <Button variant="contained" sx={{ my: 4 }} style={{ backgroundColor: '#673ab7' }}>
                                    Explore New
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid container item xs={12} md={6} style={{ ...verticalCenter }}>


                        <iframe width="500" style={{ borderRadius: '50px' }} height="315" src="https://www.youtube.com/embed/eNAKE3ik6Iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



                    </Grid>

                </Grid>
            </div>
        </ThemeProvider>
    );
};

export default Banner;