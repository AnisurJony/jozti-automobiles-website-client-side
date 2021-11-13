import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

import ProductBanner from '../ProductBanner/ProductBanner';
import Review from '../../Dashboard/Review/Review';

import ProductsForHomePage from '../Products/ProductsForHomePage';
import { Container } from '@mui/material';


const Home = () => {
    return (
        <Container>
            <div>

                <Navigation></Navigation>
                <Banner></Banner>

                <ProductsForHomePage></ProductsForHomePage>
                <ProductBanner></ProductBanner>
                <Review></Review>
                <div style={{ margin: '80px 50px' }}>
                    <Footer></Footer>
                </div>
            </div>
        </Container>
    );
};

export default Home;