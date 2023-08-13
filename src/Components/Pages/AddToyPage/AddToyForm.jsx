import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';

const AddToyForm = () => {

    useTitle('Add Toy');

    const [picture_url, setPictureURL] = useState('');
    const [name, setName] = useState('');
    const [seller, setSellerName] = useState('');
    const [seller_email, setSellerEmail] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [available_quantity, setQuantity] = useState('');
    const [detail_description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Read the form data
        const toyData = {
            picture_url,
            name,
            seller,
            seller_email,
            category,
            price,
            rating,
            available_quantity,
            detail_description,
        };

     
        console.log(toyData);
        
        fetch('https://toy-market-place-server-side.onrender.com/addToys', {
            method: "POST", 
            headers: {
                'content-type' : 'application/json', 
            }, 
            body: JSON.stringify(toyData)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if (data.acknowledged){

                toast.success('Your Data has been successfully Added');
            }
        })

    };

    return (

        <div className='primary-container'>
            <h2 className='section-title pb-3'>Add your toys</h2>
            <form onSubmit={handleSubmit} className=" max-w-sm sm:max-w-md xl:max-w-xl mx-auto bg-primary p-8 mt-8 rounded-md shadow-md">
                <div className='grid grid-cols-1 xl:grid-cols-2  gap-x-4'>
                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Picture URL:</label>
                        <input
                            type="text"
                            value={picture_url}
                            onChange={(e) => setPictureURL(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Seller Name:</label>
                        <input
                            type="text"
                            value={seller}
                            onChange={(e) => setSellerName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Seller Email:</label>
                        <input
                            type="email"
                            value={seller_email}
                            onChange={(e) => setSellerEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Category:</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select a category</option>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Science Toys">Science Toys</option>
                        </select>
                    </div>

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
                        <label className="block mb-2 font-semibold">Rating:</label>
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select a rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
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

export default AddToyForm;
