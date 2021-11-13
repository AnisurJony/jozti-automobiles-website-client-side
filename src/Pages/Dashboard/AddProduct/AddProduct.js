import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log('data', data);

        fetch('https://desolate-gorge-00712.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.inserted) {
                    alert('Product has added successfully');
                    reset()
                }
            })
    };

    return (
        <div>

            <div className="add-product">
                <h2>Add A Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input {...register("img")} placeholder="Image Url" />
                    <input type="number" {...register("price")} placeholder="Price" />

                    <input style={{ width: '150px', backgroundColor: '#673AB7', color: 'white' }} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;