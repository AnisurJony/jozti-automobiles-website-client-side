
import * as React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Carousel from "react-elastic-carousel";
import CustomerReview from './CustomerReview';
import useAuth from '../../../Hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Review = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [feedbacks, setFeedbacks] = React.useState([]);

    const { user } = useAuth();



    const initialInfo = { rating: 5, comment: '', }
    console.log(initialInfo)
    const [commentInfo, setCommentInfo] = useState(initialInfo);
    console.log(commentInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...commentInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setCommentInfo(newInfo);

        e.preventDefault();
    }


    const handleReviewSubmite = e => {
        const comment = {
            ...commentInfo,
            name: user.displayName
        }
        console.log(comment)


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    alert('Thank You For Your Valuable Feedback')
                    handleClose()
                }
            })

        e.preventDefault();
    }


    useEffect(() => {

        fetch('http://localhost:5000/reviews')

            .then(res => res.json())

            .then(data => {

                setFeedbacks(data)
            })
    }, [])


    return (



        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{ marginTop: '55px', border: '1px solid lightGray' }}>
                <Box sx={{ height: '500px', width: '100%' }} >

                    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'around', padding: '35px 0', height: '150px' }}>
                        <Grid item xs={6} md={6} style={{ textAlign: 'left' }}>
                            <Typography variant='h5' style={{ fontWeight: '500', color: '#673AB7', marginBottom: '10px' }}>
                                Reviews ({feedbacks.length})
                            </Typography>
                            <Typography >
                                Get specific details about this product from customers who own it.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={6} style={{ textAlign: 'right' }}>
                            <Button onClick={handleOpen} variant='outlined' style={{ fontWeight: '500', fontSize: '20px', color: '#673AB7' }}>Write Review</Button>

                        </Grid>

                    </Grid>
                    <Divider />
                    <Grid container spacing={2} style={{ marginTop: '15px' }}>
                        <Grid item xs={12} md={12} >


                            <h1 style={{ textAlign: "center" }}>Make A Positive Feedback</h1>
                            <div className="App">
                                <Carousel>
                                    {feedbacks.map(feedback => <CustomerReview
                                        key={feedback._id}
                                        feedback={feedback}
                                    >

                                    </CustomerReview>)}

                                </Carousel>
                            </div>

                        </Grid>


                    </Grid>
                    <div>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Make a Review
                                </Typography>
                                <form onSubmit={handleReviewSubmite}>



                                    <br />
                                    <TextField
                                        label="Make Rating"
                                        id="outlined-size-small"
                                        name='rating'
                                        onBlur={handleOnBlur}
                                        defaultValue="4/5"
                                        size="small"
                                    />
                                    <br />
                                    <br />


                                    <TextareaAutosize
                                        maxRows={6}
                                        aria-label="maximum height"
                                        placeholder="Maximum 8 rows"
                                        name="comment"
                                        onBlur={handleOnBlur}
                                        defaultValue="Your comment here!
                                        Make a valuable review."
                                        style={{ width: 210 }}
                                    />
                                    <br />
                                    <Button variant="contained" style={{ backgroundColor: '#673AB7' }} type='submit'>Post the Comment</Button>
                                </form>
                            </Box>
                        </Modal>

                    </div>
                </Box>
            </Container>
        </React.Fragment>




    );
};

export default Review;