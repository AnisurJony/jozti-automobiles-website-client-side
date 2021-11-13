
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../../Pages/Shared/Navigation/Navigation';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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
const PurchaseNow = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { productId } = useParams();
    console.log(productId)

    const { user } = useAuth();

    const [allProducts, setAllProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});

    console.log(selectedProduct)

    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', address: '', }
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);


    useEffect(() => {

        fetch('https://desolate-gorge-00712.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))

    }, [])


    useEffect(() => {

        const product = allProducts.find(product => product._id === productId);
        console.log(product)
        setSelectedProduct(product)


    }, [productId, allProducts])


    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;

        setPurchaseInfo(newInfo);

        e.preventDefault();
    }

    const handlePurchaseComplete = e => {

        const order = {
            ...purchaseInfo,

            productName: selectedProduct?.name,
            productid: productId,

        }


        fetch('https://desolate-gorge-00712.herokuapp.com/orders', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('order successfully Placed')
                    handleClose();
                }
            })

        e.preventDefault();
    }



    return (
        <div>
            <Navigation></Navigation>
            <h2>Purchase Your Dream Car</h2>

            <Box >
                <Typography style={{ textAlign: 'center' }}>
                    Hello! {user.displayName}
                </Typography>
                <Typography style={{ textAlign: 'center' }}>
                    Your Selected Product: {selectedProduct?.name}
                </Typography>

                <Typography style={{ textAlign: 'center' }}>
                    {selectedProduct?.description}
                </Typography>





            </Box>

            <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: '#673AB7' }}>Order Now</Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" style={{ textAlign: 'center' }}>
                            {selectedProduct?.name}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ textAlign: 'center' }}>
                            <form onSubmit={handlePurchaseComplete}>

                                <TextField

                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    name='patientName'
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName}
                                    size="small"
                                />
                                <TextField

                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    name='email'
                                    onBlur={handleOnBlur}
                                    defaultValue={user.email}
                                    size="small"
                                />
                                <TextField

                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    name='phone'
                                    onBlur={handleOnBlur}
                                    defaultValue='Your Phone Number'
                                    size="small"
                                />
                                <TextField

                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    name='address'
                                    onBlur={handleOnBlur}
                                    defaultValue="Address"
                                    size="small"
                                />

                                <TextField
                                    disabled
                                    sx={{ width: '90%', m: 1 }}
                                    id="outlined-size-small"
                                    defaultValue={productId}
                                    size="small"
                                />
                                <Button variant="contained" type='submit' style={{ backgroundColor: '#673AB7' }}>Order</Button>
                            </form>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>


        </div>
    );
};

export default PurchaseNow;