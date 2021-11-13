import * as React from 'react';
import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';


import Product from '../Product/Product';


const ProductsForHomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://desolate-gorge-00712.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (


        <div>

            <Container maxWidth="lg">

                <Typography variant="h6" component="div" sx={{ fontWeight: 400, color: 'success.main' }}>
                    OUR PRODUCTS
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600, m: 2 }} >
                    Products We Offer
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} >

                    {products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)}

                </Grid>


            </Container>
        </div>
    );
};

export default ProductsForHomePage;