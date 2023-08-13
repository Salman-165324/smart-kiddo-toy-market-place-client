import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateToy = () => {

    const [price, setPrice] = useState('');
    const [available_quantity, setQuantity] = useState('');
    const [detail_description, setDescription] = useState('');
    const {id}= useParams(); 
    console.log(id); 

    const handleSubmit = (event) => {
        event.preventDefault();

        // Read the form data
        const toyData = {
            id,
            price,
            available_quantity,
            detail_description,
        };

        console.log(toyData);

        fetch('https://toy-market-place-server-side.onrender.com/updateToy', {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount) {

                    toast.success('Your Data has been successfully Updated');
                }
            })

    };
    return (
        <div className='primary-container'>
            <h2 className='section-title pb-3'>Update your toy</h2>
            <form onSubmit={handleSubmit} className=" max-w-sm sm:max-w-md xl:max-w-xl mx-auto bg-primary p-8 mt-8 rounded-md shadow-md">
                <div className='grid grid-cols-1 xl:grid-cols-2  gap-x-4'>





                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Price:</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Available Quantity:</label>
                        <input
                            type="number"
                            value={available_quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>


                </div>

                <div className="mb-6 w-full ">
                    <label className="block mb-2 font-semibold">Detail Description:</label>
                    <textarea
                        value={detail_description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>

                <div>
                    <button type="submit" className="w-full primary-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;