import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/ar_ultimae.png';
import { Button, Typography } from '@mui/material';

const productBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(197, 219, 222, 0.9 )',
    backgroundBlendMode: 'darken,luminosity',
    backgroundRepeat: 'no-reapeat',
    marginTop: 175
}
const ProductBanner = () => {
    return (
        <Box style={{ ...productBanner, height: '570px', backgroundRepeat: 'no-repeat' }} sx={{ flexGrow: 1 }} >
            <Grid container spacing={2}>

                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',

                    textAlign: 'right',
                    marginRight: '60px',
                    marginTop: '100px'
                }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: 'white' }} >

                            Make a Purchase Today
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }} >
                            {/* New version are available */}
                            NEW VERSION ARE AVAILABLE

                        </Typography>
                        <Typography variant='h6' sx={{ my: 3 }} style={{ color: 'white', fontSize: '14px', fontWeight: '300' }} >
                            The Aventador has been created to anticipate the future, as demonstrated by the use of innovative technology,<br /> including a V12 engine and the extensive use of carbon fiber.


                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#673AB7' }}>LERN MORE</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default ProductBanner;