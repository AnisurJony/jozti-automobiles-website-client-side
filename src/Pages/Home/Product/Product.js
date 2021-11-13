import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, price } = product;

    return (

        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345, mx: 'auto ' }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Price: ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Link to={`/purchasenow/${_id}`} style={{ textDecoration: 'none' }}> <Button size="small">Purchase Now</Button></Link>
                    <Link to='/exploreproducts' style={{ textDecoration: 'none' }}> <Button size="small">Exolore More</Button></Link>

                </CardActions>
            </Card>
        </Grid >

    );
};

export default Product;