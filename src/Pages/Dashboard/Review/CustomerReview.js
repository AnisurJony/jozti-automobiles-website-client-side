import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const CustomerReview = ({ feedback }) => {

    const { name, rating, comment } = feedback;
    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 228,
                    height: 228,
                    borderRadius: '20px'
                },
            }}
        >

            <Paper elevation={3} >
                <div>
                    <h5>{name}</h5>
                    <p>{rating}</p>

                    <p>{comment}</p>
                </div>
            </Paper>
        </Box>
    );
};

export default CustomerReview;