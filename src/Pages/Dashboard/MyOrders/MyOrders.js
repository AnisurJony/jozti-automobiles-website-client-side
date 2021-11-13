import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
const MyOrders = () => {

    const { user, token } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url, {

            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [token, user.email]);



    const handleDeleteOrder = id => {

        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {

            const url = `http://localhost:5000/orders/${id}`;

            fetch(url, {

                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        alert('Order deleted successfully');

                        const remainingOrders = myOrders.filter(order => order._id !== id);

                        setMyOrders(remainingOrders);

                    }
                })
        }
    }




    return (
        <div>
            <h2>My Orders:{myOrders.length}</h2>

            <TableContainer component={Paper}>

                <Table aria-label="My Orders Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>

                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((order) => (

                            <TableRow

                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.customerName}
                                </TableCell>

                                <TableCell align="right">{order.email}</TableCell>
                                <TableCell align="right">{order.productName}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDeleteOrder(order._id)}>Cencel</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;