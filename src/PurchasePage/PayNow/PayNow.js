import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const PayNow = () => {
    return (
        <div style={{ margin: '50px auto' }}>
            <h2>Payment System comming soon...........</h2>
            <br />
            <Link to='/dashboard'>
                <Button> Go Back to Dashboard </Button>
            </Link>
        </div >
    );
};

export default PayNow;